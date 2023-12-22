import { useState , useRef } from 'react'
import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { RiFileCopyLine } from 'react-icons/ri';

function App() {
  const[queryDescription, setQueryDescription] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");
  const codeRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(400); // Initial width of the code block
  const codeBlockRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsResizing(true);
  };

  const handleMouseMove = (e) => {
    if (isResizing) {
      setWidth(e.clientX - codeBlockRef.current.getBoundingClientRect().left);
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const generatedQuery = await generateQuery();
    setSqlQuery(generatedQuery);
  }

  const copyToClipboard = () => {
    if (codeBlockRef.current) {
      const el = codeBlockRef.current.innerText;
      navigator.clipboard.writeText(el).then(() => {
        // Success message or handle success
        console.log('Code copied to clipboard!');
      }).catch((error) => {
        // Error handling if copy fails
        console.error('Unable to copy:', error);
      });
    }
  };

  const generateQuery = async () => {
    const response = await fetch("http://localhost:3005/generate",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify({queryDescription : queryDescription}),
    });

    const data = await response.json();
    return data.response.trim();
  }
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="" className = {styles.icon} />
      <h3>  Generate SQL with Prompt </h3>


      <form onSubmit={onSubmit}>
        <input type="text" 
        name="query-description" 
        placholder="prompt your query" 
        onChange={(e)=> setQueryDescription(e.target.value)}
        />
        <input type="submit" value="Generate SQL query" />
        
      </form>

      <div style={{ borderRadius: '8px', backgroundColor: '#ffffff', padding: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
            <button onClick={copyToClipboard} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
              <RiFileCopyLine style={{ fontSize: '1.5em' }} />
            </button>
          </div>
          <div style={{ position: 'relative', maxWidth: '100%' }}>
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{
              width: `${width}px`,
              resize: 'horizontal',
              overflow: 'auto',
              borderRadius: '8px',
              border: '1px solid #ccc',
              padding: '10px',
              whiteSpace: 'pre-wrap',
            }}
            ref={codeBlockRef}
          >
            {sqlQuery}
          </SyntaxHighlighter>

          <div
            style={{
              position: 'absolute',
              right: '0',
              bottom: '0',
              width: '10px',
              height: '10px',
              cursor: 'col-resize',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          />
        </div>
        </div>
    </main>
  )
}

export default App
