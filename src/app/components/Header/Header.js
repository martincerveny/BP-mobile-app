import React from 'react'
import { Body, Header as NativeHeader, Left, Right, Subtitle, Title, View, Text } from 'native-base'

import styles from './styles'

/**
 * Component that renders as Header (navbar) for your screen.
 *
 * @param {React.Component} [left] - The left part of the header.
 * @param {string} [title] - The title of the header.
 * @param {string} [subtitle] - The subtitle of the header.
 * @param {(Array.<React.Component>|React.Component)} [right] - The right part of the header.
 * @returns {React.Component} - Header.
 */
const Header = ({ left = null, title = null, subtitle = null, right = null}) => (
    <NativeHeader style={styles.default} iosBarStyle="light-content">
      <Left>{left}</Left>
      <Body style={{flex: 3}}>
        {title ? <Title style={{ color: '#fff' }}>{title}</Title> : null}
        {subtitle ? <Subtitle style={{ color: '#fff' }}>{subtitle}</Subtitle> : null}
      </Body>
      <Right>{right}</Right>
    </NativeHeader>
);

export default Header
