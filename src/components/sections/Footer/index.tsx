import * as React from 'react';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import { Social, Action, Link } from '../../atoms';
import ImageBlock from '../../blocks/ImageBlock';

export default function Footer(props) {
    const {
        colors = 'bg-light-fg-dark',
        logo,
        title,
        text,
        primaryLinks,
        secondaryLinks,
        socialLinks = [],
        legalLinks = [],
        copyrightText,
        styles = {},
        enableAnnotations
    } = props;
    return (
        <footer
        
        </footer>
    );
}

function FooterLinksGroup(props) {
    const { title, links = [] } = props;
    const fieldPath = props['data-sb-field-path'];
    if (links.length === 0) {
        return null;
    }
    return (
        <div className="pb-8" data-sb-field-path={fieldPath}>
            {title && (
                <h2 className="uppercase text-base tracking-wide" {...(fieldPath && { 'data-sb-field-path': '.title' })}>
                    {title}
                </h2>
            )}
            {links.length > 0 && (
                <ul className={classNames('space-y-3', { 'mt-7': title })} {...(fieldPath && { 'data-sb-field-path': '.links' })}>
                    {links.map((link, index) => (
                        <li key={index}>
                            <Action {...link} className="text-sm" {...(fieldPath && { 'data-sb-field-path': `.${index}` })} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
