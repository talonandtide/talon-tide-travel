#!/usr/bin/env bash
# Flags common British-English spellings in source/content files.
# Exits 1 if any match is found so CI can fail the build.
#
# Run locally: bash scripts/check-british-spellings.sh
# Allowlist a term by adding a line to scripts/british-spellings.allowlist

set -uo pipefail

PATTERN='\b(programme|programmes|centre|centres|colour|colours|coloured|behaviour|behaviours|favour|favours|favourite|favourites|honour|honours|honoured|neighbour|neighbours|neighbourhood|labour|labours|rumour|rumours|humour|harbour|harbours|organise|organised|organising|organisation|organisations|recognise|recognised|recognising|realise|realised|realising|specialise|specialised|specialising|analyse|analysed|analysing|apologise|apologised|categorise|categorised|customise|customised|emphasise|emphasised|maximise|maximised|minimise|minimised|optimise|optimised|prioritise|prioritised|utilise|utilised|travelling|travelled|traveller|travellers|cancelled|cancelling|modelling|modelled|labelled|labelling|licence|licenced|defence|offence|catalogue|dialogue|analogue|theatre|theatres|metre|metres|litre|litres|fibre|fibres|jewellery|storey|storeys|grey|ageing|enrol|enrolled|enrolling|fulfil|fulfilment|instalment|skilful|wilful|practise|practised|cheque|cheques|kerb|mould|moulded|plough|sceptical|whilst|amongst|learnt|spelt|dreamt|burnt|leapt|smelt)\b'

# File globs to scan
INCLUDE=(
  'src/**/*.{ts,tsx,js,jsx,md,mdx,html,css,json}'
  'public/**/*.{html,md,txt,xml,json}'
  'index.html'
  'README.md'
)

ALLOWLIST_FILE="scripts/british-spellings.allowlist"
ALLOW_ARGS=()
if [[ -f "$ALLOWLIST_FILE" ]]; then
  # Each non-empty, non-comment line is a term to ignore
  while IFS= read -r term; do
    [[ -z "$term" || "$term" =~ ^# ]] && continue
    ALLOW_ARGS+=( -v -w -e "$term" )
  done < "$ALLOWLIST_FILE"
fi

GLOB_ARGS=()
for g in "${INCLUDE[@]}"; do
  GLOB_ARGS+=( -g "$g" )
done

# ripgrep is standard on GitHub-hosted runners
if ! command -v rg >/dev/null 2>&1; then
  echo "ripgrep (rg) is required" >&2
  exit 2
fi

MATCHES=$(rg -n -i --pcre2 "${GLOB_ARGS[@]}" "$PATTERN" . || true)

if [[ -n "${ALLOW_ARGS[*]:-}" && -n "$MATCHES" ]]; then
  MATCHES=$(printf '%s\n' "$MATCHES" | grep -iE "${ALLOW_ARGS[@]}" || true)
fi

if [[ -n "$MATCHES" ]]; then
  echo "British-English spellings detected. Please use US English:"
  echo
  printf '%s\n' "$MATCHES"
  echo
  echo "Fix these, or (if intentional, e.g. a proper noun) add the term to $ALLOWLIST_FILE."
  exit 1
fi

echo "No British-English spellings detected."
