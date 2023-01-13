<?php
/**
* Dashboard Social Media Conversation Tile
*/
class SMM_My_Conversation_Tile extends DT_Dashboard_Tile
{

    /**
     * Register any assets the tile needs or do anything else needed on registration.
     * @return mixed
     */
    public function setup() {
        //wp_enqueue_script( $this->handle, 'path-t0-your-tiles-script.js', [], null, true);
        wp_enqueue_script( 'smm_scripts', trailingslashit( plugin_dir_url( __DIR__ ) ) . 'dist/smm_scripts.js', [], filemtime( plugin_dir_path( __DIR__ ) . 'dist/smm_scripts.js' ) );
    }

    /**
     * Render the tile
     */
    public function render() {
        include( trailingslashit( plugin_dir_path( __DIR__ ) ) . 'tile/template/dashboard-my-convo-template.php' );
    }
}

/**
* Next, register our class. This can be done in the after_setup_theme hook.
*/
DT_Dashboard_Plugin_Tiles::instance()->register(
    new SMM_My_Conversation_Tile(
        'SMM_My_Convo_Tile',                     //handle
        __( 'My Conversations', 'disciple-tools-social-media-manager' ), //label
        [
            'priority' => 1,
            'span' => 2
         ]
    )
);
?>
