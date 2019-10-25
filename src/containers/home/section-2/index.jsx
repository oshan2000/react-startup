import React from 'react';

import {
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangGenerateTree from './../../../providers/utils/lang.generate.tree';
import LangToggler from './../../../providers/lang/toggler';

// components
import SectionBlock from './../../../components/layouts/section';
import SVGComponent from './../../../components/commons/svg';

const styles = theme => ({
  body: {
    margin: '0 auto',
    width: '80%',
  },
  body2: {
    marginBottom: `${theme.spacing(6)}px`,
  },
  card: {
    background: theme.palette.background.transparent,
    boxShadow: 'initial',
    maxWidth: '100%',
    textAlign: 'center',
  },
  container: {
    padding: 0,
    textAlign: 'center',
  },
  cta: {
    padding: `${theme.spacing(6)}px 0`,
  },
  icon: {
    fontSize: '3.4em',
  },
  items: {
    textAlign: 'center',
  },
  subtitle: {
    color: theme.palette.primary.contrastText,
    marginBottom: `${theme.spacing(6)}px`,
  },
  subtitle2: {
    color: theme.palette.primary.contrastText,
    marginBottom: `${theme.spacing(2)}px`,
  },
  svg: {
    margin: `${theme.spacing(8)}px 0`,
  },
  title: {
    color: theme.palette.primary.contrastText,
    marginBottom: `${theme.spacing(6)}px`,
  },
});

const NODE = 'home';
const SLOT = 'section_2';
// copy:
// 1 title
// 1 body
// 4 items
const copy = LangGenerateTree([NODE, SLOT], [
  'body',
  'items-3-body',
  'items-3-cta',
  'items-3-cta_link',
  'items-3-svg',
  'items-3-title',
  'subtitle',
  'title',
]);

function SectionC (props: {
  classes: Object,
  proxy: Object,
}) {
  const { classes, proxy } = props;
  const { verbiage } = proxy;

  return (
    verbiage &&
    <SectionBlock>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.container}>
        <Grid
          item
          sm={12}
          md={12}>
          <Typography
            variant="h2"
            className={classes.title}>
            <LangToggler id={copy.title} />
          </Typography>
          <Typography
            variant="h3"
            className={classes.subtitle}>
            <LangToggler id={copy.subtitle} />
          </Typography>
          <Typography
            variant="body1"
            className={classes.body}>
            <LangToggler id={copy.body} />
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={(10)}>
        {copy.items.map((item, i) => {
          const key = `${i}_item_x`;

          return (
            <Grid
              item
              sm={12}
              md={4}
              lg={4}
              key={key}>
              <Grid
                container
                className={classes.items}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}>
                  <SVGComponent src={verbiage(item.svg)} className={classes.svg} />
                  <Typography
                    variant="h4"
                    className={classes.subtitle2}>
                    <LangToggler id={item.title} />
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}>
                  <Typography
                    variant="body1"
                    className={classes.body2}>
                    <LangToggler id={item.body} />
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </SectionBlock>
  );
}

export default withStyles(styles)(SectionC);