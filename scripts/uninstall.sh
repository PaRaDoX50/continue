#!/bin/bash
# Script to delete all the installed modules
# List of directories to delete
directories=(
  "./gui/node_modules"
  "./gui/out"
  "./gui/dist"
  "./core/node_modules"
  "./core/dist"
  "./extensions/vscode/node_modules"
  "./extensions/vscode/bin"
  "./extensions/vscode/build"
  "./extensions/vscode/out"
  "./binary/node_modules"
  "./binary/bin"
  "./binary/dist"
  "./binary/out"
)

# Loop through each directory and delete if it exists
for dir in "${directories[@]}"; do
  if [ -d "$dir" ]; then
    rm -rf "$dir"
    echo "Removed $dir"
  else
    echo "$dir not found"
  fi
done
