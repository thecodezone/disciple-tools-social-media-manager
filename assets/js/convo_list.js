import { css, html, LitElement } from "lit";
import {repeat} from 'lit/directives/repeat.js';
import {classMap} from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { msg } from '@lit/localize';
import { DtBase } from "@disciple.tools/web-components";
import ApiService from "@disciple.tools/web-components";



export class conversationList extends DtBase {
  static get properties() {
    return {
      ...super.properties,
      conversations: { type: Array },
      offset: { type: Number},
      perPage: { type: Number},
      userid: { type: Number},
      showOnlyUnclaimed: { type: Boolean},
    };
  }

  constructor() {
    super();
    this.offset = 0;
    this.perPage = 6;
  }

  static get styles() {
    return css`
      .smm-conversation-list {
          list-style: none;
          margin: 0;
          padding: 0;
          border: 1px solid #E6E6E6;
      }
      button {
        border: none;
        background: none;
        cursor: pointer;
        color: var(--gray-1, #B7B7B7);
        font-size: 1em;
        padding: .25em 0.5em;
      }

      button svg {
        display: block;
        height: 1em;
        width: 0.4em;
      }

      button.active {
        background: var(--surface-0, e2e2e2);
        color: var(--text-color, #0a0a0a);
        border-radius: 5px;
      }
      .smm-list-pagination {
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
      }
    `
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('search', this._handleSearch);
  }
  disconnectedCallback() {
    window.removeEventListener('search', this._handleSearch);
    super.disconnectedCallback();
  }

  //this has to be an arrow function so that the this keyword is bound to the component class
  _handleSearch = async (e) => {
    if (e.target !== this) {
      return;
    }
    e.target === e.currentTarget ? 'container' : e.target.textContent;
    let query = {"text":e.detail.value,"sort":"last_modified", "claimed": [this.showOnlyUnclaimed ? false : true]}
    const response = await window.makeRequestOnPosts( 'GET', `smm_conversation`, query)
    this.conversations = response.posts;
  }

  _paginationRender () {
    const pages = Math.ceil(this.conversations.length/this.perPage);
    if (pages > 1){
      if (this.offset === 0) {
        return html`
          ${this._paginationButtonsRender(pages)}
          <button class="button small" @click=${() => this.offset = this.offset + this.perPage}><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.6333 0.46666L4.69997 3.53333C4.76663 3.59999 4.81375 3.67221 4.8413 3.74999C4.8693 3.82777 4.8833 3.9111 4.8833 3.99999C4.8833 4.08888 4.8693 4.17222 4.8413 4.24999C4.81375 4.32777 4.76663 4.39999 4.69997 4.46666L1.6333 7.53333C1.51108 7.65555 1.35552 7.71666 1.16663 7.71666C0.977745 7.71666 0.82219 7.65555 0.699967 7.53333C0.577745 7.4111 0.516634 7.25555 0.516634 7.06666C0.516634 6.87777 0.577746 6.72221 0.699967 6.59999L3.29997 3.99999L0.699968 1.39999C0.577746 1.27777 0.516635 1.12221 0.516635 0.933325C0.516635 0.744437 0.577746 0.588882 0.699968 0.46666C0.82219 0.344437 0.977746 0.283325 1.16663 0.283325C1.35552 0.283325 1.51108 0.344437 1.6333 0.46666Z" fill="var(--gray-1, #B7B7B7)"/></svg></button>`
      }
      if (this.offset === (pages-1) * this.perPage) {
        return html`
        <button class="button small" @click=${() => this.offset = this.offset - this.perPage}><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.3667 7.53334L0.300032 4.46667C0.233366 4.40001 0.186255 4.32779 0.158699 4.25001C0.130699 4.17223 0.116699 4.0889 0.116699 4.00001C0.116699 3.91112 0.130699 3.82778 0.158699 3.75001C0.186255 3.67223 0.233366 3.60001 0.300032 3.53334L3.3667 0.466674C3.48892 0.344451 3.64448 0.28334 3.83337 0.28334C4.02225 0.28334 4.17781 0.344451 4.30003 0.466674C4.42225 0.588896 4.48337 0.744452 4.48337 0.93334C4.48337 1.12223 4.42225 1.27779 4.30003 1.40001L1.70003 4.00001L4.30003 6.60001C4.42225 6.72223 4.48337 6.87779 4.48337 7.06667C4.48337 7.25556 4.42225 7.41112 4.30003 7.53334C4.17781 7.65556 4.02225 7.71667 3.83337 7.71667C3.64448 7.71667 3.48892 7.65556 3.3667 7.53334Z" fill="var(--gray-1, #B7B7B7)"/></svg>
</button>
        ${this._paginationButtonsRender(pages)}`;
      }

      return html`
      <button class="button small" @click=${() => this.offset = this.offset - this.perPage}><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.3667 7.53334L0.300032 4.46667C0.233366 4.40001 0.186255 4.32779 0.158699 4.25001C0.130699 4.17223 0.116699 4.0889 0.116699 4.00001C0.116699 3.91112 0.130699 3.82778 0.158699 3.75001C0.186255 3.67223 0.233366 3.60001 0.300032 3.53334L3.3667 0.466674C3.48892 0.344451 3.64448 0.28334 3.83337 0.28334C4.02225 0.28334 4.17781 0.344451 4.30003 0.466674C4.42225 0.588896 4.48337 0.744452 4.48337 0.93334C4.48337 1.12223 4.42225 1.27779 4.30003 1.40001L1.70003 4.00001L4.30003 6.60001C4.42225 6.72223 4.48337 6.87779 4.48337 7.06667C4.48337 7.25556 4.42225 7.41112 4.30003 7.53334C4.17781 7.65556 4.02225 7.71667 3.83337 7.71667C3.64448 7.71667 3.48892 7.65556 3.3667 7.53334Z" fill="var(--gray-1, #B7B7B7)"/></svg></button>
      ${this._paginationButtonsRender(pages)}
      <button class="button small" @click=${() => this.offset = this.offset + this.perPage}><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.6333 0.46666L4.69997 3.53333C4.76663 3.59999 4.81375 3.67221 4.8413 3.74999C4.8693 3.82777 4.8833 3.9111 4.8833 3.99999C4.8833 4.08888 4.8693 4.17222 4.8413 4.24999C4.81375 4.32777 4.76663 4.39999 4.69997 4.46666L1.6333 7.53333C1.51108 7.65555 1.35552 7.71666 1.16663 7.71666C0.977745 7.71666 0.82219 7.65555 0.699967 7.53333C0.577745 7.4111 0.516634 7.25555 0.516634 7.06666C0.516634 6.87777 0.577746 6.72221 0.699967 6.59999L3.29997 3.99999L0.699968 1.39999C0.577746 1.27777 0.516635 1.12221 0.516635 0.933325C0.516635 0.744437 0.577746 0.588882 0.699968 0.46666C0.82219 0.344437 0.977746 0.283325 1.16663 0.283325C1.35552 0.283325 1.51108 0.344437 1.6333 0.46666Z" fill="var(--gray-1, #B7B7B7)"/>
</svg></button>`

    } else {
      return html``
    }
  }

  _paginationButtonsRender (pages) {
    let buttons = [];
    for (let i = 0; i < pages; i++) {
      const classes = {
        button: true,
        small: true,
        active: (this.offset === i * this.perPage) ? true : false
      };


       buttons.push( html`<button class="${classMap(classes)}" @click=${() => this.offset = i * this.perPage}>${i+1}</button>` );
    }
    return html`${buttons}`
  }

  _headerRender () {
    const pages = Math.ceil(this.conversations.length/this.perPage);
    if (pages > 1) {
      return html`
      <span class="smm-list-header-text">
      <smm-search id="convoListSearch" name="convoListSearch" value="" type="text" requiredmessage="" privatelabel="" onchange="" internals-valid="" aria-invalid="false"></smm-search>
      </span>
      `;
    }
  }

  render() {
    return html`
      <div class="smm-list-header">
        ${this._headerRender()}
      </div>
      <ul class="smm-conversation-list">
      ${repeat(
          this.conversations,
          (conversation) => conversation.ID,
          (conversation, index) => (this.offset <= index && index < (this.offset + this.perPage) ) ? html`
        <li><smm-list-item .conversation=${conversation} userid=${this.userid}></smm-list-item></li>
        ` : ``
        )}
      </ul>
      <span class="smm-list-pagination">
        ${this._paginationRender()}
      </span>
    `;
  }
}

customElements.define("smm-conversation-list", conversationList);
