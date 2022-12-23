import { html, css } from 'lit';
import { msg } from '@lit/localize';
import { classMap } from 'lit/directives/class-map.js';
import { DtBase } from "@disciple.tools/web-components";


export class smmChatMessage extends DtBase {
  static get styles() {
    return css`
      :host {
        --smm-incoming-message-background: var(--gray-1, #919191);
        --smm-outgoing-message-background: var(--success-color, #4caf50);
      }
      .chat-message {
        display: flex;
        align-items: flex-end;
        margin-bottom: 1em;
        flex-direction: row-reverse;
      }

      .chat-message__avatar {
        width: clamp(3em, 5vw, 5em);
      }

      .chat-message__avatar img {
        width: 100%;
        border-radius: 50%;
      }

      .chat-message__body {
        max-width: clamp(10em, 52vw, 60%);
        padding: 1em;
        border-radius: 1em;
        /* @todo make this right to left compatible */
        border-bottom-right-radius: 0;
        background: var(--smm-outgoing-message-background);
      }

      .chat-message__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .chat-message__name {
        font-weight: bold;
        font-size: 1.1em;
      }
      .chat-message.incoming {
        flex-direction: row;
      }

      .chat-message.incoming .chat-message__body {
        background: var(--smm-incoming-message-background);
        /* @todo make this right to left compatible */
        border-bottom-right-radius: 1em;
        border-bottom-left-radius: 0;
      }
      `
  }

  static get properties() {
    return {
      message: { type: Object },
      incomingMessage: { type: Boolean },
    };
  }

  _formatDate(date) {
    let dateObj = new Date( date );
    let dateString = new Intl.DateTimeFormat('default', { month: 'short', day: 'numeric' }).format(dateObj);

    return dateString;
  }

  render() {
    const classes = {incoming: this.incomingMessage, outgoing: false, 'chat-message': true};
    return html`
      <div class="${classMap(classes)}">
          <div class="chat-message__avatar">
            <img src="${this.message.avatar}" alt="${this.message.name}" />
          </div>
        <div class="chat-message__body">
          <div class="chat-message__header">
            <div class="chat-message__name">${this.message.name}</div>
            <div class="chat-message__date">${this._formatDate( this.message.date )}</div>
          </div>
          <div class="chat-message__text">${this.message.body}</div>
        </div>
      </div>
    `;
  }
}

window.customElements.define("smm-chat-message", smmChatMessage);
