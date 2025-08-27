#!/bin/bash

# Get commit message
COMMIT_MESSAGE=$1

# Generate date in dd/mm/yyyy format
DATE_VALUE=$(date +"%d/%m/%Y")

# Replace slashes with dashes for branch name (git doesn't like slashes)
BRANCH_NAME=$(echo $DATE_VALUE | sed 's/\//-/g')

echo "Creating commit with date: $DATE_VALUE"
echo "Branch name: $BRANCH_NAME"

# Add all changes
git add .

# Commit with date as message
git commit -m "$DATE_VALUE
$COMMIT_MESSAGE
"

# Push to branch with date name
git push origin $BRANCH_NAME
