<?php
    $conversations = DT_Posts::list_posts('smm_conversation', [
        'claimed_by' => [ get_current_user_id() ],
        'sort' => 'last_modified'
    ], false)['posts'] ?? [];
    if ( is_wp_error( $conversations ) ) {
        $conversations = [];
    }
?>
<div class="tile-header">
    <?php  _e('Conversations', 'disciple-tools-social-media-manager') ?>
</div>
<div class="dashboard-tile-smm-list-container">
    <ul class="smm-conversation-list">
        <?php foreach ( $conversations as $conversation ):
            $conversation_posts = DT_Posts::get_post( 'smm_conversation', $conversation['ID'] );
            foreach ( $conversation_posts['conversations'] as $key => $value ):?>
                <li>
                    <smm-list-item conversation="<?php echo esc_attr( wp_json_encode( $value ) ) ?>"></smm-list-item>
                </li>
            <?php endforeach; ?>
        <?php endforeach; ?>
    </ul>
</div>
