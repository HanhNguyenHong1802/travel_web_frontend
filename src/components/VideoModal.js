import React, { Component } from "react";
import ModalVideo from "react-modal-video";

export class VideoModal extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <div>
          <ModalVideo
            channel="youtube"
            isOpen={this.state.isOpen}
            videoId="eH2WNtL5ong"
            onClose={() => this.setState({ isOpen: false })}
          />
          <button
          style={{
            margin:'6px',
            padding: '12px 26px',
            fontSize: '20px',
            background: 'white',
            border: 'none',
            borderRadius: '2px'
          }}
          onClick={this.openModal}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </button>
        </div>
      </div>
    );
  }
}

export default VideoModal;