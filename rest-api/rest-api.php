<?php
if ( !defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly.

class Disciple_Tools_Social_Media_Manager_Endpoints
{
    /**
     * @todo Set the permissions your endpoint needs
     * @link https://github.com/thecodezone/Documentation/blob/master/theme-core/capabilities.md
     * @var string[]
     */
    public $permissions = [ 'access_contacts', 'dt_all_access_contacts' ];


    /**
     * @todo define the name of the $namespace
     * @todo define the name of the rest route
     * @todo defne method (CREATABLE, READABLE)
     * @todo apply permission strategy. '__return_true' essentially skips the permission check.
     */
    //See https://github.com/thecodezone/disciple-tools-theme/wiki/Site-to-Site-Link for outside of wordpress authentication
    public function add_api_routes() {
        dt_write_log('Disciple Tools Social Media Manager Endpoints - add_api_routes');
        $namespace = 'dt-smm/v1';

        register_rest_route(
            'dt-public/v1', '/dt-smm/fb-webhook', [
                'methods'  => 'POST',
                'callback' => [ $this, 'profile' ],
                'permission_callback' => '__return_true',
            ]
        );
    }

    public function profile( WP_REST_Request $request ) {
        $params = $this->process_token( $request );

        dt_write_log($params);
        if ( is_wp_error( $params ) ) {
            return $params;
        }
        return dt_remote_network_site_profile();
    }
    public function facebook_webhook( WP_REST_Request $request ) {
        dt_write_log('facebook_webhook');
        // @todo run your function here
        $params = $request->get_params();
        $body = $request->get_json_params() ??$request->get_body_params();

        dt_write_log($params);
        dt_write_log($body);

        $params = $request->get_params();
        $headers = $request->get_headers();
        $current_ip = Site_Link_System::get_real_ip_address();
        $fails = get_transient( 'facebooks_fails' );

        // fails honeypot
        if ( ! empty( $fails ) ) {
            if ( isset( $fails['ip'] ) && $fails['ip'] === $current_ip ) {
                if ( $fails['ip'] > 10 ) {
                    return new WP_Error( __METHOD__, "Too many attempts", array( 'status' => 400 ) );
                }
            }
        }


        return true;
    }

    private static $_instance = null;
    public static function instance() {
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    } // End instance()
    public function __construct() {
        add_action( 'rest_api_init', [ $this, 'add_api_routes' ] );
    }
    public function has_permission(){
        $pass = false;
        foreach ( $this->permissions as $permission ){
            if ( current_user_can( $permission ) ){
                $pass = true;
            }
        }
        dt_write_log($pass);
        return $pass;
    }
}
Disciple_Tools_Social_Media_Manager_Endpoints::instance();
