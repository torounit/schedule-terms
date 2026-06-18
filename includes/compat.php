<?php
/**
 * Backward-compatible class aliases for the deprecated
 * HAMWORKS\WP\Schedule_Terms namespace.
 *
 * TODO: remove this file and the "files" autoload entry in a future
 * major release once the old namespace is no longer supported.
 *
 * @package Schedule_Terms
 */

( function () {
	$map = array(
		'HAMWORKS\\WP\\Schedule_Terms\\Assets'       => 'Torounit\\WP\\Schedule_Terms\\Assets',
		'HAMWORKS\\WP\\Schedule_Terms\\Plugin'       => 'Torounit\\WP\\Schedule_Terms\\Plugin',
		'HAMWORKS\\WP\\Schedule_Terms\\Post_Meta'    => 'Torounit\\WP\\Schedule_Terms\\Post_Meta',
		'HAMWORKS\\WP\\Schedule_Terms\\Schedule'     => 'Torounit\\WP\\Schedule_Terms\\Schedule',
		'HAMWORKS\\WP\\Schedule_Terms\\Term_Manager' => 'Torounit\\WP\\Schedule_Terms\\Term_Manager',
		'HAMWORKS\\WP\\Schedule_Terms\\Term_Meta'    => 'Torounit\\WP\\Schedule_Terms\\Term_Meta',
		'HAMWORKS\\WP\\Schedule_Terms\\Term_UI'      => 'Torounit\\WP\\Schedule_Terms\\Term_UI',
		'HAMWORKS\\WP\\Schedule_Terms\\Term\\UI'     => 'Torounit\\WP\\Schedule_Terms\\Term\\UI',
	);

	foreach ( $map as $old_class => $new_class ) {
		if ( ! class_exists( $old_class ) && class_exists( $new_class ) ) {
			class_alias( $new_class, $old_class );
		}
	}
} )();
