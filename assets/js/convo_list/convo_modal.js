import { css, html, LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { DtModal } from "@disciple.tools/web-components";
import { msg } from '@lit/localize';


export class conversationModal extends DtModal {
  static get properties() {
    return {
      conversation: { type: Object },
      open: { type: Boolean },
      claimed: { type: Boolean },
      convoid: { type: Number },
      userid: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
      }
      dialog {
        width: 90vw;
        height: 90vh;
        padding: 0;
      }
      dialog::backdrop {
        background: rgba(0, 0, 0, 0.7);
      }
      `
  }

  render() {
    return html`
    <dialog
        id=""
        class="dt-modal"
        @click=${this._dialogClick}
        @keypress=${this._dialogKeypress}
      >
        <smm-chat-window ?claimed=${this.claimed} convoid=${this.convoid} userid=${this.userid} conversation=${JSON.stringify(this.conversation)}></smm-chat-window>
    </dialog>
    <button
      class="button small opener"
      data-open=""
      aria-label="Open reveal"
      type="button"
      @click="${this._openModal}"
    >
      <slot name="openButton">${msg('Open Dialog')}</slot>
    </button>
    `;
  }
}

window.customElements.define("smm-conversation-modal", conversationModal);
