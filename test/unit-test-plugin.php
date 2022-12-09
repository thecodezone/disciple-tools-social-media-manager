<?php

class PluginTest extends TestCase
{
    public function test_plugin_installed() {
        activate_plugin( 'disciple-tools-social-media-manager/disciple-tools-social-media-manager.php' );

        $this->assertContains(
            'disciple-tools-social-media-manager/disciple-tools-social-media-manager.php',
            get_option( 'active_plugins' )
        );
    }
}
