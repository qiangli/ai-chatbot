#!/bin/bash
set -x

URLS=(
#chatbot ui
http://localhost:30001/
# postgres admin
http://localhost:55432/
# redis admin
http://localhost:56379/
)

##
function chrome() {
  case "$OSTYPE" in
    darwin*)
      open -n -a "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --args "$@" --user-data-dir=/tmp/chrome "${URLS[@]}"
      ;;
    linux*)
      google-chrome "$@" --user-data-dir=/tmp/chrome "${URLS[@]}"
      ;;
    msys*)
      "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" "$@" --disable-gpu --user-data-dir=~/temp/chrome "${URLS[@]}"
      ;;
    *)
      echo "$OSTYPE not supported"
      ;;
  esac
}

##
chrome --remote-debugging-port=9222 "$@"

##