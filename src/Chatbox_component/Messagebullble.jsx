import React, { useState } from 'react';
import closeIcon from './close.png';

const Messagebullble = ({ message, file, fileName, isSender }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');
  const [modalImgAlt, setModalImgAlt] = useState('');

  const zoomIn = (src, alt) => {
    setModalImgSrc(src);
    setModalImgAlt(alt);
    setModalVisible(true);
  };

  const handleCloseClick = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {/* Render the modal */}
      {modalVisible && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <span
            className="absolute top-4 right-6 text-white text-4xl font-bold cursor-pointer"
            onClick={handleCloseClick}
          >
            <img src={closeIcon} alt="close" className="w-8" />
          </span>
          <div className="flex flex-col items-center">
            <img
              id="img01"
              src={modalImgSrc}
              alt={modalImgAlt}
              className="w-4/5 max-w-2xl rounded-lg"
            />
            <p
              id="caption"
              className="text-center text-gray-300 mt-4"
            >
              {modalImgAlt}
            </p>
          </div>
        </div>
      )}

      {/* Rest of the component */}
      <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} my-2`}>
        <div
          className={`inline-block bg-contain p-3 m-2 rounded-lg ${isSender ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 text-black self-start'}`}
          style={{ maxWidth: '50%' }}
        >
          {file ? (
            <div>
              <p className="text-xs font-bold">{fileName}</p>
              <img
                id="images"
                src={file}
                alt={fileName}
                className="mt-2 max-w-80 rounded cursor-pointer"
                onClick={() => zoomIn(file, fileName)}
              />
            </div>
          ) : (
            <p>{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messagebullble;
