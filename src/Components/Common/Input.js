import KeyboardEventHandler from 'react-keyboard-event-handler';

const CustomInput = (props) => (
  <div>
    <KeyboardEventHandler
      handleKeys={['all']}
      onKeyEvent={(key, e) => props.setEventKey(key)}
    >
      {' '}
      <p>
        {' '}
        <input type="text" placeholder="Key events will be handled" />{' '}
      </p>{' '}
      <p>
        {' '}
        <a href="#">
          Example focusable element. Key event will be handled
        </a>{' '}
      </p>{' '}
    </KeyboardEventHandler>
  </div>
);

export default CustomInput;
