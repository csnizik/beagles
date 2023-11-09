<?php declare(strict_types = 1);

namespace PHPStan\ExtensionInstaller;

/**
 * This class is generated by phpstan/extension-installer.
 * @internal
 */
final class GeneratedConfig
{

	public const EXTENSIONS = array (
  'mglaman/phpstan-drupal' => 
  array (
    'install_path' => '/opt/drupal/vendor/mglaman/phpstan-drupal',
    'relative_install_path' => '../../../mglaman/phpstan-drupal',
    'extra' => 
    array (
      'includes' => 
      array (
        0 => 'extension.neon',
        1 => 'rules.neon',
      ),
    ),
    'version' => '1.2.1',
  ),
  'phpstan/phpstan-deprecation-rules' => 
  array (
    'install_path' => '/opt/drupal/vendor/phpstan/phpstan-deprecation-rules',
    'relative_install_path' => '../../phpstan-deprecation-rules',
    'extra' => 
    array (
      'includes' => 
      array (
        0 => 'rules.neon',
      ),
    ),
    'version' => '1.1.4',
  ),
);

	public const NOT_INSTALLED = array (
);

	private function __construct()
	{
	}

}
