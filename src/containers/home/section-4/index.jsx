
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import {
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../providers/lang/toggler';
import ThemeColor from './../../../providers/utils/theme.color';

// commons
import ContactFormLayout from './../../../components/layouts/commons/contact_1';

// components
import SectionBlock from './../../../components/layouts/section';

const variant = 'primary';

const styles = theme => ({
  background: {},
  button: {
    margin: 0,
    width: '100%',
  },
  svg: {
    bottom: theme.spacing(20),
    right: theme.spacing(6),
    width: '100%',
  },
  title: {
    // textAlign: 'center',
    color: ThemeColor({ variant }, theme),
    fontSize: '.9em',
    textTransform: 'capitalize',
  },
});

const NODE = 'home';
const SLOT = 'section_4';

const copy = LangGenerateTree([NODE, SLOT], [
  'id',
  'svg',
  'title',
]);

class SectionA extends Component {
  props: {
    classes: Object,
    proxy: Object,
  }

  render () {
    const {
      classes,
      proxy,
    } = this.props;

    const {
      verbiage,
    } = proxy;

    return (
      verbiage &&
      <SectionBlock variant={variant} id={verbiage(copy.id)}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={6}>
          <Grid
            item
            sm={12}
            md={12}
            lg={12}>
            <Typography
              variant="body2"
              className={classes.title}
            >
              <LangToggler id={copy.title} />
            </Typography>
          </Grid>
          <Grid
            item
            sm={10}
            md={8}
            lg={8}>
            <ContactFormLayout
              proxy={proxy}
              variant={variant}
            />
          </Grid>
        </Grid>
      </SectionBlock>
    );
  }
}

export default withStyles(styles)(withRouter(SectionA));
