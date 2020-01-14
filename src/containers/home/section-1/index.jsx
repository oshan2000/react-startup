
// import { Parallax } from 'react-parallax';
import { Section } from 'react-scroll-section';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import {
  Paper,
  withStyles,
} from '@material-ui/core';

import LangGenerateTree from './../../../providers/utils/lang.generate.tree';

import { LangButton } from './../../../components/commons/button';
import Callout from './../../../components/commons/callout/';
import Icon from './../../../components/commons/icon';
import SmartImg from './../../../components/commons/img';
import SVGComponent from './../../../components/commons/svg';

const styles = theme => ({
  background: {
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: -1,
  },
  button: {
    margin: '0 auto',
  },
  callout: {
    background: 'transparent',
    display: 'inline-block',
    textAlign: 'center',
    width: '60%',
    zIndex: 1,
  },
  content: {
    marginTop: theme.spacing(10),
    width: '100%',
  },
  hero: {
    background: theme.palette.primary.main,
    overflow: 'hidden',
    padding: `${theme.spacing(12)}px 0 0 0`,
    position: 'relative',
    textAlign: 'center',
    zIndex: 1,
  },
  icon: {
    fontSize: '1rem',
  },
  image: {
    width: '100%',
    zIndex: -1,
  },
  logo: {
    display: 'block',
    margin: '0 auto',
    width: 320,
  },
  svg: {
    bottom: '-10%',
    position: 'absolute',
    right: 0,
    width: '50%',
    zIndex: -1,
  },
});


const NODE = 'home';
const SLOT = 'section_1';
// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'background_show',
  'background',
  'cta',
  'id',
  'logo',
  'subtitle',
  'svg_show',
  'svg',
  'title',
]);

class SectionA extends Component {
  props: {
    classes: Object,
    proxy: Object,
  }

  render () {
    const { classes, proxy } = this.props;
    const { verbiage } = proxy;

    return (
      verbiage &&
      <Section id={verbiage(copy.id)}>
        <Paper
          container="true"
          className={classes.hero}
          elevation={0}>
          {verbiage(copy.svg_show) && <SVGComponent src={verbiage(copy.svg)} className={classes.svg} variant="primary" />}
          {verbiage(copy.background_show) && <SmartImg proxy={proxy} src={verbiage(copy.background)} className={classes.background} />}
          <SmartImg proxy={proxy} src={verbiage(copy.logo)} className={classes.logo} />
          <Callout
            align="center"
            title={copy.title}
            subtitle={copy.subtitle}
            variant="light"
            className={classes.callout}>
            <LangButton
              className={classes.button}
              lang={copy.cta}
              onClick={this.handleClick}
              variant="dark2">
              <Icon name="keyboard_arrow_right" className={classes.icon} />
            </LangButton>
          </Callout>
        </Paper>
      </Section>
    );
  }
}

export default withStyles(styles)(withRouter(SectionA));
