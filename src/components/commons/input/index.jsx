import 'react-toggle/style.css';
import classnames from 'classnames';
import HTMLParser from 'html-react-parser';
import React, { Component, Fragment } from 'react';
import Toggle from 'react-toggle';

import {
  Divider,
  FormControl,
  Input,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
  withStyles,
} from '@material-ui/core';

// components
import Icon from '../icon/index.jsx';

import Messages from './messages';

// masks
import MaskCredit from './mask/credit.jsx';
import MaskCurrency from './mask/currency.jsx';
import MaskCVV from './mask/cvv.jsx';
import MaskFloat from './mask/float.jsx';
import MaskPhone from './mask/phone.jsx';
import MaskZip from './mask/zipcode.jsx';

const styles = theme => ({
  marginDense: {
    margin: 0,
    whiteSpace: 'nowrap',
  },
  marginNormal: {
    '& .react-toggle-thumb': {
      boxShadow: 'initial!important',
    },
    '&[class*="react-toggle"]': {
      boxShadow: 'initial',
      margin: `${theme.spacing.unit * 1}px`,
    },
    '&[class*="toggle--checked"]': {
      '& .react-toggle-thumb': {
        backgroundColor: `${theme.palette.primary.main}!important`,
        borderColor: 'initial',
      },
      '& .react-toggle-track': {
        backgroundColor: `${theme.palette.primary.contrastText}!important`,
      },
    },
    outline: `2px dotted ${theme.palette.utils.highlight}`,
  },
  root: {
    '& svg[class*="uiSvgIcon"]': {
      position: 'absolute',
      right: 0,
      top: 0,
    },
    '*[class*="MuiMenuItem-selected"]': {
      backgroundColor: `${theme.palette.primary.dark}!important`,
    },
    backgroundColor: '#ffffff!important',
    border: `1px solid ${theme.palette.utils.black}`,
    boxShadow: `0 0 2px ${theme.palette.utils.black} inset`,
    margin: `${theme.spacing.unit * 1}px 0`,
    padding: '4px 8px',
  },
});

class InputLayout extends Component {
  state = {
    focused: false,
  };

  props: {
    classes: Object,
    fieldType: string,
    id: string,
    InputLabelProps: any,
    label: string,
    lang: string,
    multiline: Boolean,
    onChange: Function,
    options: Array,
    placeholder: Object,
    proxy: Function,
    value: any,
  };

  showOptions (options) {
    const {
      proxy: { verbiage, language },
    } = this.props;

    return verbiage && options.map((option, i) => {
      let { label, value } = option;
      let node;

      // label as lang id, not as object (*forms)
      if (typeof label === 'string') {
        label = verbiage(label);
        value = verbiage(value);
      }

      if (value !== '') {
        node = (
          <MenuItem key={`${i}_select_input`} value={value}>
            {label[language]}
          </MenuItem>
        );
      } else {
        node = (
          <MenuItem key={`no_${i}_value_select_input`} value='' disabled>
            {label[language]}
          </MenuItem>
        );
      }

      return node;
    });
  }

  handleFocus = () => {
    this.setState({
      focused: true,
    });
  }

  handleBlur = (event) => {
    const {
      fieldType,
      proxy: {
        handleBlur,
      },
    } = this.props;

    this.setState({ focused: false });

    if (handleBlur) {
      handleBlur(event, fieldType);
    }
  }

  error = () => {
    const {
      id,
      proxy: {
        errors,
        language,
      },
    } = this.props;

    return (
      errors[id].check && <Typography variant='caption' color='default'>{Messages(errors[id].error, language)}</Typography>
    );
  }

  render () {
    const {
      classes,
      fieldType,
      id,
      InputLabelProps,
      mask,
      multiline,
      options,
      proxy: {
        language,
        verbiage,
        handleChange,
      },
      value,
    } = this.props;
    const { focused } = this.state;

    const props = JSON.parse(JSON.stringify(this.props));
    delete props.options;
    delete props.fieldType;

    let label = '';
    let placeholder = '';
    const filled = value && value.length > 0;


    if (language) {
      label = props.lang && props.lang[language];
      placeholder = props.placeholder && props.placeholder[language];

      delete props.lang;
      delete props.placeholder;

      if (props.required === false) {
        label = (
          <Fragment>
            {label}
            <Typography variant="caption" component="span">{Messages('optional', language)}</Typography>
          </Fragment>
        );
      }
    }

    const inputProps = {
      endAdornment: (
        props.error !== undefined &&
        <InputAdornment>
          {!props.error &&
            <Icon name={'check'} className={classnames(classes.icon)} color={value.length > 0 ? 'success' : 'default'} />
          }
          {props.error &&
            <Icon name={'exclamation-triangle'} className={classnames(classes.icon)} color="error" />
          }
        </InputAdornment>
      ),
      placeholder,
    };

    if (mask === 'credit') {
      inputProps.inputComponent = MaskCredit;
      inputProps.value = value;
    } else if (mask === 'currency') {
      inputProps.inputComponent = MaskCurrency;
      inputProps.value = value;
    } else if (mask === 'cvv') {
      inputProps.inputComponent = MaskCVV;
      inputProps.value = value;
    } else if (mask === 'float') {
      inputProps.inputComponent = MaskFloat;
      inputProps.value = value;
    } else if (mask === 'phone') {
      inputProps.inputComponent = MaskPhone;
      inputProps.value = value;
    } else if (mask === 'zipcode') {
      inputProps.inputComponent = MaskZip;
      inputProps.value = value;
    }

    const field = {
      checkbox: (
        <FormControl fullWidth>
          <Toggle
            defaultChecked={Boolean(value)}
            className={classes.marginNormal}
            onBlur={this.handleBlur}
            onChange={handleChange}
            {...props} />
          <Typography className={'toggle'} variant="caption">{label}</Typography>
        </FormControl>
      ),
      divider: <Divider variant="middle" />,
      input: (
        <FormControl fullWidth>
          <TextField
            className={classnames(classes.marginDense, (focused || filled) && classes.marginNormal, props.error && 'error')}
            fullWidth
            label={label}
            onBlur={this.handleBlur}
            onChange={handleChange}
            onFocus={this.handleFocus}
            InputProps={inputProps}
            InputLabelProps={{
              shrink: true,
            }}
            {...props} />
          {props.error && this.error()}
        </FormControl>
      ),
      multiple: (
        <FormControl fullWidth>
          <TextField
            className={classnames(classes.marginDense, (focused || filled) && classes.marginNormal)}
            fullWidth
            label={label}
            onBlur={this.handleBlur}
            onChange={handleChange}
            onFocus={this.handleFocus}
            select
            SelectProps={{
              displayEmpty: true,
              MenuProps: {
                anchorOrigin: {
                  horizontal: 'left',
                  vertical: 'bottom',
                },
                getContentAnchorEl: null,
              },
              multiple: true,
            }}
            InputProps={inputProps}
            InputLabelProps={{
              shrink: true,
            }}
            {...props} >
            {options && this.showOptions(options)}
          </TextField>
          {props.error && this.error()}
        </FormControl>
      ),
      phone: (
        <FormControl fullWidth>
          <TextField
            className={classnames(classes.marginDense, (focused || filled) && classes.marginNormal, props.error && 'error')}
            fullWidth
            label={label}
            onBlur={this.handleBlur}
            onChange={handleChange}
            onFocus={this.handleFocus}
            InputProps={inputProps}
            InputLabelProps={{
              shrink: true,
            }}
            {...props}
            type={'text'} />
          {props.error && this.error()}
        </FormControl>
      ),
      select: (
        <FormControl fullWidth>
          <TextField
            className={classnames(classes.marginDense, (focused || filled) && classes.marginNormal)}
            fullWidth
            label={label}
            onBlur={this.handleBlur}
            onChange={handleChange}
            onFocus={this.handleFocus}
            select
            SelectProps={{
              displayEmpty: true,
              MenuProps: {
                anchorOrigin: {
                  horizontal: 'left',
                  vertical: 'bottom',
                },
                getContentAnchorEl: null,
              },
            }}
            InputLabelProps={{
              shrink: true,
            }}
            {...props}
            InputProps={inputProps}>
            {options && this.showOptions(options)}
          </TextField>
          {props.error && this.error()}
        </FormControl>
      ),
      textarea: (
        <FormControl fullWidth>
          <TextField
            className={classnames(classes.marginDense, (focused || filled) && classes.marginNormal)}
            fullWidth
            label={label}
            multiline={multiline}
            onBlur={this.handleBlur}
            onChange={handleChange}
            onFocus={this.handleFocus}
            InputProps={inputProps}
            InputLabelProps={{
              shrink: true,
            }}
            {...props} />
          {props.error && this.error()}
        </FormControl>
      ),
    };

    return (
      <Fragment>
        {field[fieldType]}
      </Fragment>
    );
  }
}

export const LangInput = withStyles(styles)(InputLayout);
