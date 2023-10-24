# Drupal with DDEV Quickstart

This guide provides as quick setup for a Drupal 10 site on your local machine using DDEV to manage your Docker configurations.

## Prerequisites

If you are working on a PC, you will need to set up WSL2 (Windows Subsystem for Linux) using Ubuntu 22.04. There are several tutorials available for this from Windows, Linux, and third-parties. (If you are using a machine running Linux, macOS or any Unix-based OS, you do not need WSL.)

- Docker-Desktop
- DDEV
- Composer

## Installation

1. Create a new directory for your Drupal 10 project:

    ```bash
    mkdir my-drupal-site
    cd my-drupal-site
    ```

2. Initialize DDEV in your new directory:

    ```bash
    ddev config --project-type=drupal10 --docroot=web --create-docroot
    ddev start
    ```

3. Install Drupal using Composer:

    ```bash
    ddev composer create drupal/recommended-proect
    ```

4. Install additional tools and configurations:

    ```bash
    ddev composer require drush/drush
    ddev drush site:install --account-name=admin --account-pass=admin -y
    ```

5. Launch the Drupal site:

    ```bash
    ddev launch
    ```

6. Go to the UI in a browser:

    You will now have a site running locally using at least two containers in Docker: a web container for Drupal's core files, plus any additional modules, themes, assets (images, uploaded files, etc.), and a database container.

    ```bash
    ddev drush uli
    ```

    This will print a link that will log you in as the "admin" user and you will land in the default Drupal administrative UI.

7. Access the web container in a terminal:

    You can access the terminal of the running web container using the Docker interface. You will start your session at the project root directory.

8. Open the source code in a code editor:

    Open a code editor to the directory you created on your local drive, i.e. `my-drupal-site/`. Changes you make here will be made in the Docker container also.

9. Set up Git:

    Within your project's root directory, initialize Git and add a `.gitignore` with the following:

    ```sh
    # Ignore system files
    .DS_Store
    Thumbs.db
    core

    # Ignore sensitive files
    web/sites/settings*.php
    web/sites/services*.yml

    # Ignore private files
    web/sites/*/files/private/
    web/sites/*/files/temporary/
    web/sites/*/files/sync/
    web/sites/*/files/config_*

    # Ignore contributed modules and themes
    web/sites/*/modules/contrib/
    web/sites/*/themes/contrib/
    web/modules/contrib
    web/themes/contrib

    # Ignore default files folder
    web/sites/default/files/

    # Ignore cache and temporary files
    web/sites/*/files/css/
    web/sites/*/files/js/
    web/sites/*/files/php/

    # Ignore generated and compiled files
    *.gz
    *.tar
    *.zip
    *.log

    # Ignore Composer vendor folder
    vendor/
    ```

This will give you a default installation of Drupal core.
