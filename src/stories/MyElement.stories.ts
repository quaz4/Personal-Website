import { html, css, LitElement } from 'lit';

import "../my-element";

export default {
    title: "My Element",
    component: "my-element",
    args: {
        name: "There",
        count: 0
    }
}

const Template = ({ name, count }: { name: string, count: number }) => html`
    <my-element .name=${name} .count=${count}>
        <p>This is child content</p>
    </my-element>`;

export const FirstStory = Template.bind({});

// FirstStory.args 