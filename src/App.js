// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
 
import FroalaEditorComponent from 'react-froala-wysiwyg';

function App() {
  return (
    <FroalaEditorComponent tag='textarea'/>
  );
}

export default App;
