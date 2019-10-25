import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component, Fragment } from 'react';

import {
  withStyles,
} from '@material-ui/core';

import {
  setServiceAction,
} from './../../store/actions/services';

import Helmet from '../../components/commons/helmet';
import Header from '../../components/header';
import Footer from '../../components/footer';

// commons
import ServicesLayout from '../../components/layouts/commons/services_1';

import BannerA from './banner-1';
import SectionA from './section-1';
import SectionB from './section-2';
import SectionD from './section-4';
import SectionE from './section-5';


// provider
import LangGenerateTree from './../../providers/utils/lang.generate.tree';

const styles = () => ({
  container: {
    margin: 0,
  },
});

const NODE = 'headers';
const SLOT = 'home';
// copy:
const copy = LangGenerateTree([NODE, SLOT], [
  'description',
  'keywords',
  'title',
]);

const init = {
  document: {},
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = init;
  }

  props: {
    device: string,
    isHeaderVisible: Boolean,
    language: string,
    lead: Object,
    leadType: string,
    setService: Function,
    verbiage: Function,
  }

  handleBlur = () => {}

  handleChange = () => {}

  handleSetService = (item, cb) => {
    const {
      setService,
    } = this.props;

    setService(item);
    cb(true);
  }

  handleSubmit = () => {}

  render () {
    const {
      device,
      isHeaderVisible,
      language,
      lead,
      leadType,
      verbiage,
    } = this.props;

    const proxy = {
      device,
      isHeaderVisible,
      language,
      lead,
      leadType,
      verbiage,
    };

    const {
      document,
    } = this.state;

    return (
      <Fragment>
        <Helmet proxy={proxy} copy={copy} />
        <Header proxy={proxy} />
        <SectionA proxy={proxy} />
        <BannerA proxy={proxy} />
        <SectionB proxy={proxy} />

        <ServicesLayout setService={this.handleSetService} proxy={proxy} variant="light2" />

        <SectionD
          document={document}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onSubmit={this.handleSubmit}
          proxy={proxy}
        />

        <BannerA proxy={proxy} />
        <SectionE proxy={proxy} />
        <Footer />
      </Fragment>
    );
  }
}

// map state to props
function mapStateToProps (state) {
  return {
    device: state.device,
    isHeaderVisible: state.isHeaderVisible,
    language: state.language,
    lead: state.lead,
    leadType: state.leadType,
    verbiage: state.verbiage,
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setService: setServiceAction,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Home));
