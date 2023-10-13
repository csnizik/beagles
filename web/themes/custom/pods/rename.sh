#!/bin/bash

# The directory to start the search from. Modify this if needed.
START_DIR="."

# Function to recursively search and rename
recursive_rename() {
    local current_dir="$1"
    for item in "$current_dir"/*; do
        # If item is a directory, call this function recursively
        if [ -d "$item" ]; then
            recursive_rename "$item"
        fi
    done

    # Rename directories and files in the current directory
    for item in "$current_dir"/*uswds_base_subtheme*; do
        # Check if item exists (glob might not match anything)
        if [ -e "$item" ]; then
            local new_name="${item/uswds_base_subtheme/pods}"
            mv "$item" "$new_name"
        fi
    done
}

# Call the recursive function from the starting directory
recursive_rename "$START_DIR"
