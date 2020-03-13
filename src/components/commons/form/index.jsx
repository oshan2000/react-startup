
import React, { Component, Fragment } from 'react';

import {
  Card,
  CardContent,
  Grid,
  Typography,
  withStyles,
} from '@material-ui/core';

// provider
import LangToggler from './../../../providers/lang/toggler';
import ThemeBackground from './../../../providers/utils/theme.background';
import ThemeColor from './../../../providers/utils/theme.color';

// components
import { LangInput } from './../../../components/commons/input';

import Icon from './../icon';

const styles = theme => ({
  button: {
    margin: 0,
  },
  card: () => ({
    background: 'transparent',
    overflow: 'visible',
  }),
  helper: props => ({
    background: ThemeBackground(props, theme, 'dark'),
    color: ThemeColor(props, theme),
    margin: `${theme.spacing(1)}px 0 ${theme.spacing(4)}px`,
    padding: theme.spacing(2),
  }),
  icon: props => ({
    color: ThemeColor(props, theme),
  }),
  item: {
    width: '100%',
  },
  root: {
    backgroundColor: 'transparent',
    padding: `${theme.spacing(3)}px 0 ${theme.spacing(3)}px`,
  },
  row: {
    marginBottom: `${theme.spacing(2)}px`,
  },
  title: props => ({
    color: ThemeColor(props, theme),
    margin: `${theme.spacing(4)}px 0 0 0`,
  }),
});

class FormBlock extends Component {
  state = {}

  props: {
    children: Object,
    classes: Object,
    copy: Object,
    disabled: Boolean,
    document: Object,
    proxy: Object,
    variant: Object,
  }

  render () {
    const {
      children,
      classes,
      copy,
      document,
      proxy,
      variant,
    } = this.props;

    const {
      disabled,
      verbiage,
    } = proxy;

    return (
      <Fragment>
        {verbiage &&
          <Card className={classes.card} elevation={0}>
            {copy.label &&
              <Fragment>
                <Typography variant="h4" align="left" className={classes.title}>
                  <LangToggler id={copy.label} />
                </Typography>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  className={classes.helper}
                >
                  <Grid
                    item
                    md={1}
                  >
                    <Icon name="keyboard_arrow_right" className={classes.icon} />
                  </Grid>
                  <Grid
                    item
                    md={11}
                  >
                    <Typography variant="caption">
                      <LangToggler id={copy.label_helper} />
                    </Typography>
                  </Grid>
                </Grid>
              </Fragment>
            }

            <CardContent className={classes.root}>
              <Grid container className={classes.row}>
                {copy.fields.map((field) => {
                  const fieldType = field.input_type;
                  const sm = field.size_sm;
                  const md = field.size_md;
                  const lg = field.size_lg;
                  const {
                    key,
                    label,
                    mask,
                    options,
                    placeholder,
                    required,
                    rules,
                    type,
                  } = field;

                  return (
                    <Grid key={`form_${key}`} item sm={sm} md={md} lg={lg} className={classes.item}>
                      <LangInput
                        disabled={disabled}
                        document={document}
                        fieldType={fieldType}
                        id={key}
                        lang={label}
                        mask={mask || ''}
                        name={key}
                        options={options || []}
                        placeholder={placeholder}
                        proxy={proxy}
                        required={required}
                        rules={rules}
                        type={type}
                        value={document[key] || ''}
                        variant={variant}
                      />
                    </Grid>
                  );
                })}
                {children}
              </Grid>
            </CardContent>
          </Card>
        }
      </Fragment>
    );
  }
}

export default withStyles(styles)(FormBlock);
