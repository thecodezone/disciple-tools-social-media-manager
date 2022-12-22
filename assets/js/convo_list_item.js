import { css, html, LitElement } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { DtBase } from "@disciple.tools/web-components";

export class conversationList extends DtBase {
  static get properties() {
    return {
      conversation: { type: Object }
    };
  }

  static get styles() {
    return css`
      :host {
        --dt-modal-button-background: var(--primary-color);
        --dt-modal-button-opener-background: var(--primary-color);
        --dt-modal-button-color: #FFFFFF;
        --dt-button-font-weight: 100;
        --dt-button-padding-y: 0em;
        --dt-button-padding-y: 0.15em;
        --dt-button-padding-x: 1em;
        --dt-button-border-radius: 0.25em;
        --dt-button-font-size: 1em;
        color: currentcolor;
        display: block;
        container-type: inline-size;
        container-name: line-container;
      }

      .line-container {
        display: grid;
        grid-template-columns: 1.5fr .75fr .75fr;
        gap: 1em 0.35em;
        place-items: center;
        border-bottom: 1px solid rgb(230, 230, 230);
        padding: 1em 0;
        margin: 0 0.5em;
      }

      .mid-line-container {
        display: flex;
        flex-flow: column wrap;
        align-items: center;
        height: 100%;
        justify-content: space-around;
      }

      .name {
        font-weight: bold;
      }

      .date {
        font-size: .75em;
        align-content: center;
      }

      .date span {
        background: var(--smm-list-date-background, #F0F0F0);
        border-radius: .25em;
        padding: .5em;
      }

      .platform {
        font-size: .75em;
      }
      /* dt-button {
        flex: 1;
      } */

      @container line-container (min-width: 500px) {
        .line-container {
          grid-template-columns: 1fr 1fr 1fr;
        }

        .mid-line-container {
          flex-flow: row;
          width: 100%;
          justify-content: space-evenly;
        }
    `;
  }

  _formatDate(date) {
    let dateObj = new Date( date );
    let dateString = new Intl.DateTimeFormat('default', { month: 'short', day: 'numeric' }).format(dateObj);

    return dateString;
  }

  render() {
    return html`<div class="line-container">
      <div class="name">${this.conversation.name}</div>
      <div class="mid-line-container">
        <div class="date"><span>${this._formatDate( this.conversation.date )}</span></div>
        <div class="platform">${this.conversation.platform}</div>
      </div>

      <smm-conversation-modal title="" context="default" buttonclass="{&quot;alert&quot;:true}" buttonstyle="{&quot;padding&quot;:&quot;40px&quot;}">
        <span slot="content">Test</span>
        <span slot="openButton">
          View Conversation
        </span>
    </smm-conversation-modal>
    </div>`;
  }

}

window.customElements.define("smm-list-item", conversationList);
