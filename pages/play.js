import { connect } from 'react-redux';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';

const Index = () => (
  <Layout title="How to Play">
    <h4 className="title is-2">Play as Registered user</h4>
    <img src="/static/login.png" />
    <h4 className="title is-2">Play as Guest</h4>
    <img src="/static/guest.png" />
  </Layout>
);

Index.getInitialProps = function(ctx) {
  initialize(ctx);
};

export default connect(state => state)(Index);
