import React from 'react';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';

class Guest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  static getInitialProps(ctx) {
    initialize(ctx);
  }

  handleSubmit(e) {
    e.preventDefault();
      this.props.createToken(
        { username: this.state.email, firstName: this.state.firstName}
      );
  }

  render() {
    return (
      <Layout title="Guest">
        <h3 className="title is-3">Guest Login</h3>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className="container"
          style={{ width: '540px' }}
        >
         <div className="field">
                              <p className="control has-icons-left has-icons-right">
                                <input
                                  className="input"
                                  type="text"
                                  placeholder="Nick Name"
                                  required
                                  value={this.state.firstName}
                                  onChange={e => this.setState({ firstName: e.target.value })}
                                />
                                <span className="icon is-small is-left">
                                  <i className="fas fa-envelope" />
                                </span>
                                <span className="icon is-small is-right">
                                  <i className="fas fa-check" />
                                </span>
                              </p>
                            </div>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email"
                required
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
           <div className="field">
            <p className="control has-text-centered">
              <button type="submit" className="button is-success">
                Continue as Guest
              </button>
            </p>
          </div>
        </form>
      </Layout>
    );
  }
}

export default connect(
  state => state,
  actions
)(Guest);
