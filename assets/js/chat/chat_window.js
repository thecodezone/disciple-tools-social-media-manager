import { html, css } from 'lit';
import { msg } from '@lit/localize';
import { classMap } from 'lit/directives/class-map.js';
import { DtBase } from "@disciple.tools/web-components";


export class smmChatWindow extends DtBase {
  static get styles() {
    return css`
      :host {
      }
      .chat-window {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
      }
      .chat-window__header {
        flex: 1;
        border-bottom: 1px solid #ccc;
      }
      .conversation {
        flex: 10;
      }
      .chat-window__footer {
        flex: 1 2 0px;
        border-top: 1px solid var(--border-color);
        display: grid;
        grid-template-columns: 10fr 1fr;
        gap: 10px;
        padding: 1em 0.5em 1em 1em;
        place-content: center space-between;
        place-items: stretch;
        align-items: center;
      }

      .chat-window__footer textarea {
        grid-row-start: 1;
        grid-column-start: 1;
        border-radius: 0.25em;
        border: 1px solid var(--border-color);
        resize: none;
        padding: 1em;
      }

      .chat-window__footer .send-button {
        background: var(--primary-color);
        border: none;
        color: var(--text-color-inverse);
        height: 3.5em;
        width: 3.5em;
        border-radius: 50%;
        grid-row-start: 1;
        grid-column-start: 2;
        justify-self: center;
      }
      `
  }

  static get properties() {
    return {
      message: { type: Object },
      open: { type: Boolean },
    };
  }

  ChatButtonClick(e) {
    let messageText = this.shadowRoot.querySelector('textarea').value;
    //We will do something with this later
    console.log(messageText);

    this.shadowRoot.querySelector('textarea').value = '';
  }

  render() {
    let fakeMessage = {
      name: 'Name',
      avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      date: '2021-01-01',
      body: 'This is a test message.',
    }

    return html`
      <div class="chat-window">
        <div class="chat-window__header">John Smith</div>
        <div class="conversation">
          <smm-chat-message .message=${fakeMessage}></smm-chat-message>
        </div>
        <div class="chat-window__footer">
          <textarea
          id="smm-chat-input"
          name="smm-chat-input"
          aria-label="Chat Response Input"
          type="text"
          ?disabled=${this.disabled}
          class="text-input"
          @change=${this.onChange}
          .value="${this.value || ''}"
        ></textarea>
          <button class="send-button" @click=${this.ChatButtonClick}>Send</button>
        </div>
      </div>
    `;
  }
}

window.customElements.define("smm-chat-window", smmChatWindow);
