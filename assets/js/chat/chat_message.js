import { html, css } from 'lit';
import { msg } from '@lit/localize';
import { classMap } from 'lit/directives/class-map.js';
import { DtBase } from "@disciple.tools/web-components";


export class smmChatMessage extends DtBase {
  static get styles() {
    return css`
      :host {
      }
      `
  }

  static get properties() {
    return {
      message: { type: Object },
      open: { type: Boolean },
    };
  }

  render() {
    return html`
      <div class="chat-message">
        <div class="chat-message__header">
          <div class="chat-message__header__avatar">
            <img src="${this.message.avatar}" alt="${this.message.name}" />
          </div>
          <div class="chat-message__header__name">${this.message.name}</div>
          <div class="chat-message__header__date">${this.message.date}</div>
        </div>
        <div class="chat-message__body">${this.message.body}</div>
      </div>
    `;
  }
}

window.customElements.define("smm-chat-message", smmChatMessage);
