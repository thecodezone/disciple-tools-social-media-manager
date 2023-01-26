This folder contains the code for the conversation list view. The conversation list view is the view that shows the list of conversations in the Dashboard tiles, as well as the tiles on the contact, user, and conversation records pages.

## smm-conversation-list Element
This Element is the main element for the conversation list view. It is responsible for loading the conversations and displaying them in the list. The following attributes are available:

## smm-conversation-list Attributes
| Attribute | Description | Type | Default Value | Example Value |
| --------- | ----------- | ---- | ------------- | ------------- |
| `conversations` | This is an array of Objects from DT with the post information. This is normally retrieved with the `DT_Posts::list_posts` or from the API.  | `Array` | - | `conversations="[{"ID":"351","post_title":"Conversaion 1","post_type":"smm_conversation","post_date":{"timestamp":1674249551,"formatted":"2023-01-20"},"contacts":[],"status":{"key":"active","label":"Active"},"last_modified":{"timestamp":1674595192,"formatted":"2023-01-24"},"claimed":true,"conversations":[{"id":351,"name":"Randy Paris","path":"https:\/\/www.facebook.com\/1234567890\/posts\/1234567890","platform":"Facebook","date":"2022-12-02","status":"Open","participants":[{"id":1,"name":"Person 1","path":"https:\/\/www.facebook.com\/1234567890","platform":"Facebook","date":"2022-12-02","status":"Open"},{"id":2,"name":"Person 2","path":"https:\/\/www.facebook.com\/1234567890","platform":"Facebook","date":"2022-12-02","status":"Open"}]}],"claimed_by":{"id":"1","type":"user","display":"Joe User","assigned-to":"user-1"},"permalink":"https:\/\/dt.local\/smm_conversation\/351","name":"Conversaion 1"}]"` |
| `offset` | This is the offset of the conversations to show. This is used for pagination. | `Number` | `0` | `offset="10"` |
| `perPage` | This is the number of conversations to show per page. This is used for pagination. | `Number` | `6` | `perPage="10"` |
| `userid` | This is the ID of the current DT user to show the conversation, and claim new conversations | `Number` | - | `userid="1"` |
| `showOnlyClaimed` | This is a boolean value to show only claimed conversations in the list. | `Boolean` | - | `showOnlyClaimed` |
| `showOnlyUnclaimed` | This is a boolean value to show only unclaimed conversations in the list. | `Boolean` | - | `showOnlyUnclaimed"` |
| `showOnlyMyConversations` | This is a boolean value to show only conversations in the list that the current user has claimed. | `Boolean` | - | `showOnlyActive` |
| `showOnlyContactConversations` | This is a boolean value to show only conversations in the list that are related to the current contact record. This is used when the list view is on a contact record page.  | `Boolean` | - | `showOnlyContactConversations` |
| `showOnlyCurrentConversation` | This is a boolean value to show only the current conversation in the list. This is used when the list view is on a conversation record page.  | `Boolean` | - | `showOnlyCurrentConversation` |


## smm-list-item Element
This is the element that creates the individual row for each conversation in the list. It inherits the attributes `conversations`, `userid` from the `smm-conversation-list` element.

## smm-conversation-modal Element
This is the element that creates the modal for the conversation view. It extends the DT-Modal element. This element inherits the attributes `conversations`, `userid`, `convoid`, and `claimed` from the `smm-list-item` element. This element consists of the "View Conversation" button as well as the modal dialogue that pops up when you click the button. The button text can be modified using the `openButton`;

the `smm-conversation-modal` uses the `smm-chat-window` element located in the `assets/js/chat` folder to display the conversation.

