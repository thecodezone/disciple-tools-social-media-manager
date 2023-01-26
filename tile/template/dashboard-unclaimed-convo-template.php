<?php
    $conversations = DT_Posts::list_posts('smm_conversation', [
        'claimed' => [ false ],
        'sort' => 'last_modified'
    ], false)['posts'] ?? [];
    if ( is_wp_error( $conversations ) ) {
        $conversations = [];
    } ?>
<div class="tile-header">
    <?php echo esc_html( $this->label ); ?>
</div>
<div class="dashboard-tile-smm-list-container">
    <smm-conversation-list conversations="<?php echo esc_attr( wp_json_encode( $conversations ) ) ?>" userid=<?php echo esc_attr( get_current_user_id() ) ?> showOnlyUnclaimed></smm-conversation-list>
</div>
