import React, { PropTypes as T } from 'react';
import fetch from 'isomorphic-fetch';

class Article extends React.Component {

  constructor(props) {
    super(props);
    this.state = { html: '' };
  }

  componentWillMount() {
    const self = this;
    fetch(`/api/posts/${this.props.params.id}`)
      .then((response) => response.text())
      .then((article) => self.setState({ html: article }));
  }

  render() {
    return (
      <div className="Article container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
          <div dangerouslySetInnerHTML={{ __html: this.state.html }} />
          </div>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  params: T.shape({
    id: T.string.isRequired,
  }),
};

export default Article;
