<?php
if ( !defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly.

class Disciple_Tools_Social_Media_Manager_Tile
{
    private static $_instance = null;
    public static function instance(){
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    } // End instance()

    public function __construct(){
        add_filter( 'dt_details_additional_tiles', [ $this, 'dt_details_additional_tiles' ], 10, 2 );
        add_filter( 'dt_custom_fields_settings', [ $this, 'dt_custom_fields' ], 1, 2 );
        add_action( 'dt_details_additional_section', [ $this, 'dt_add_section' ], 30, 2 );
    }

    /**
     * This function registers a new tile to a specific post type
     *
     * @todo Set the post-type to the target post-type (i.e. contacts, groups, trainings, etc.)
     * @todo Change the tile key and tile label
     *
     * @param $tiles
     * @param string $post_type
     * @return mixed
     */
    public function dt_details_additional_tiles( $tiles, $post_type = '' ) {
        if ( $post_type === 'contacts' || $post_type === 'smm_conversation' ){
            $tiles['disciple_tools_social_media_manager'] = [ 'label' => __( 'Conversation History', 'disciple-tools-social-media-manager' ) ];
        }
        return $tiles;
    }

    /**
     * @param array $fields
     * @param string $post_type
     * @return array
     */
    public function dt_custom_fields( array $fields, string $post_type = '' ) {
        /**
         * @todo set the post type
         */
        //if ( $post_type === 'contacts' || $post_type === 'smm_conversation' ){
            /**
             * @todo Add the fields that you want to include in your tile.
             *
             * Examples for creating the $fields array
             * Contacts
             * @link https://github.com/thecodezone/disciple-tools-theme/blob/256c9d8510998e77694a824accb75522c9b6ed06/dt-contacts/base-setup.php#L108
             *
             * Groups
             * @link https://github.com/thecodezone/disciple-tools-theme/blob/256c9d8510998e77694a824accb75522c9b6ed06/dt-groups/base-setup.php#L83
             */

            /**
             * This is an example of a text field
             */
            // $fields['disciple_tools_social_media_manager_text'] = [
            //     'name'        => __( 'Text', 'disciple-tools-social-media-manager' ),
            //     'description' => _x( 'Text', 'Optional Documentation', 'disciple-tools-social-media-manager' ),
            //     'type'        => 'text',
            //     'default'     => '',
            //     'tile' => 'disciple_tools_social_media_manager',
            //     'icon' => get_template_directory_uri() . '/dt-assets/images/edit.svg',
            // ];
            /**
             * This is an example of a multiselect field
             */
            // $fields['disciple_tools_social_media_manager_multiselect'] = [
            //     'name' => __( 'Multiselect', 'disciple-tools-social-media-manager' ),
            //     'default' => [
            //         'one' => [ 'label' => __( 'One', 'disciple-tools-social-media-manager' ) ],
            //         'two' => [ 'label' => __( 'Two', 'disciple-tools-social-media-manager' ) ],
            //         'three' => [ 'label' => __( 'Three', 'disciple-tools-social-media-manager' ) ],
            //         'four' => [ 'label' => __( 'Four', 'disciple-tools-social-media-manager' ) ],
            //     ],
            //     'tile' => 'disciple_tools_social_media_manager',
            //     'type' => 'multi_select',
            //     'hidden' => false,
            //     'icon' => get_template_directory_uri() . '/dt-assets/images/edit.svg',
            // ];
            /**
             * This is an example of a key select field
             */
            // $fields['disciple_tools_social_media_manager_keyselect'] = [
            //     'name' => 'Key Select',
            //     'type' => 'key_select',
            //     'tile' => 'disciple_tools_social_media_manager',
            //     'default' => [
            //         'first'   => [
            //             'label' => _x( 'First', 'Key Select Label', 'disciple-tools-social-media-manager' ),
            //             'description' => _x( 'First Key Description', 'Training Status field description', 'disciple-tools-social-media-manager' ),
            //             'color' => '#ff9800'
            //         ],
            //         'second'   => [
            //             'label' => _x( 'Second', 'Key Select Label', 'disciple-tools-social-media-manager' ),
            //             'description' => _x( 'Second Key Description', 'Training Status field description', 'disciple-tools-social-media-manager' ),
            //             'color' => '#4CAF50'
            //         ],
            //         'third'   => [
            //             'label' => _x( 'Third', 'Key Select Label', 'disciple-tools-social-media-manager' ),
            //             'description' => _x( 'Third Key Description', 'Training Status field description', 'disciple-tools-social-media-manager' ),
            //             'color' => '#366184'
            //         ],
            //     ],
            //     'icon' => get_template_directory_uri() . '/dt-assets/images/edit.svg',
            //     'default_color' => '#366184',
            //     'select_cannot_be_empty' => true
            // ];

            //test fields
            // $fields['number_test'] = [
            //     'name'        => __( 'Number field', 'disciple-tools-social-media-manager' ),
            //     'type'        => 'number',
            //     'default'     => 0,
            //     'tile'        => 'a_beautiful_tile',
            //     'min_option'  => '5',
            // ];
            // $fields['number_test_private'] = [
            //     'name'        => __( 'Number field private', 'disciple-tools-social-media-manager' ),
            //     'type'        => 'number',
            //     'default'     => 0,
            //     'tile'        => 'a_beautiful_tile',
            //     'private'     => true,
            //     'max_option'  => '200',
            // ];
            // $fields['text_test'] = [
            //     'name'        => __( 'Text', 'disciple-tools-social-media-manager' ),
            //     'type'        => 'text',
            //     'default'     => 0,
            //     'tile'      => 'a_beautiful_tile',
            // ];
            // $fields['text_test_private'] = [
            //     'name'        => __( 'Text', 'disciple-tools-social-media-manager' ),
            //     'type'        => 'text',
            //     'default'     => 0,
            //     'tile'      => 'a_beautiful_tile',
            //     'private'   => true
            // ];
            // $fields['contact_communication_channel_test'] = [
            //     'name'        => __( 'Communication Channel', 'disciple-tools-social-media-manager' ),
            //     'type'        => 'communication_channel',
            //     'default'     => 0,
            //     'tile'      => 'a_beautiful_tile',
            // ];

            // $fields['user_select_test'] = [
            //     'name'        => __( 'User Select', 'disciple-tools-social-media-manager' ),
            //     'type'        => 'user_select',
            //     'tile'        => 'a_beautiful_tile'
            // ];
            // $fields['array_test'] = [
            //     'name'        => __( 'Array', 'disciple-tools-social-media-manager' ),
            //     'type'        => 'array',
            //     'tile'        => 'a_beautiful_tile'
            // ];
            // $fields['location_test'] = [
            //     'name' => 'location field',
            //     'type' => 'location',
            //     'tile' => 'a_beautiful_tile'
            // ];
            // $fields['date_test'] = [
            //     'name'        => __( ' Date Field', 'disciple-tools-social-media-manager' ),
            //     'description' => '',
            //     'type'        => 'date',
            //     'default'     => '',
            //     'tile' => 'a_beautiful_tile'
            // ];
            // $fields['date_test_private'] = [
            //     'name'        => __( ' Date Field', 'disciple-tools-social-media-manager' ),
            //     'description' => '',
            //     'type'        => 'date',
            //     'default'     => '',
            //     'tile' => 'a_beautiful_tile',
            //     'private'   => true
            // ];
            // $fields['boolean_test'] = [
            //     'name'        => __( 'Boolean', 'disciple-tools-social-media-manager' ),
            //     'type'        => 'boolean',
            //     'default'     => false,
            // ];
            // $fields['boolean_test_private'] = [
            //     'name'        => __( 'Boolean', 'disciple-tools-social-media-manager' ),
            //     'type'        => 'boolean',
            //     'default'     => false,
            //     'private'   => true
            // ];
            // $fields['multi_select_test'] = [
            //     'name' => 'Random Options',
            //     'type' => 'multi_select',
            //     'default' => [
            //         'one' => [ 'label' => 'option 1' ],
            //         'two' => [ 'label' => 'option 2' ],
            //         'three' => [ 'label' => 'option 3' ],
            //     ],
            //     'tile' => 'a_beautiful_tile',
            // ];
            // $fields['multi_select_test_private'] = [
            //     'name' => 'Random Options',
            //     'type' => 'multi_select',
            //     'default' => [
            //         'one_private' => [ 'label' => 'option 1' ],
            //         'two_private' => [ 'label' => 'option 2' ],
            //         'three_private' => [ 'label' => 'option 3' ],
            //     ],
            //     'tile' => 'a_beautiful_tile',
            //     'private'   => true
            // ];
            // $fields['key_select_test'] = [
            //     'name' => 'Random Options',
            //     'type' => 'key_select',
            //     'default' => [
            //         'one' => [ 'label' => 'option 1' ],
            //         'two' => [ 'label' => 'option 2' ],
            //         'three' => [ 'label' => 'option 3' ],
            //     ],
            //     'tile' => 'a_beautiful_tile',
            // ];
            // $fields['key_select_test_private'] = [
            //     'name' => 'Random Options',
            //     'type' => 'key_select',
            //     'default' => [
            //         'one_private' => [ 'label' => 'option 1' ],
            //         'two_private' => [ 'label' => 'option 2' ],
            //         'three_private' => [ 'label' => 'option 3' ],
            //     ],
            //     'tile' => 'a_beautiful_tile',
            //     'private'   => true
            // ];
            // $fields['tags_test'] = [
            //     'name' => 'Random Tags',
            //     'type' => 'tags',
            //     'default' => [
            //         'one' => [ 'label' => 'option 1' ],
            //         'two' => [ 'label' => 'option 2' ],
            //         'three' => [ 'label' => 'option 3' ],
            //     ],
            //     'tile' => 'a_beautiful_tile',
            // ];
            // $fields['tags_test_private'] = [
            //     'name' => 'Random Tags Private',
            //     'type' => 'tags',
            //     'default' => [
            //         'one' => [ 'label' => 'option 1' ],
            //         'two' => [ 'label' => 'option 2' ],
            //         'three' => [ 'label' => 'option 3' ],
            //     ],
            //     'tile' => 'a_beautiful_tile',
            //     'private'   => true
            // ];
        // }
        return $fields;
    }

    public function dt_add_section( $section, $post_type ) {
        /**
         * @todo set the post type and the section key that you created in the dt_details_additional_tiles() function
         */
        if ( ( $post_type === 'contacts' || $post_type === 'smm_conversation' ) && $section === 'disciple_tools_social_media_manager' ){
            /**
             * These are two sets of key data:
             * $this_post is the details for this specific post
             * $post_type_fields is the list of the default fields for the post type
             *
             * You can pull any query data into this section and display it.
             */
            $this_post = DT_Posts::get_post( $post_type, get_the_ID() );
            $post_type_fields = DT_Posts::get_post_field_settings( $post_type );
            ?>

            <!--
            @todo you can add HTML content to this section.
            -->

            <div class="cell small-12 medium-4">
                <!-- @todo remove this notes section-->

            </div>

        <?php }
    }
}
Disciple_Tools_Social_Media_Manager_Tile::instance();
