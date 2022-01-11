import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Viewer, Worker } from "@react-pdf-viewer/core";
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// import file from "./termsdocs/01 TRANSENERGY360 LLC - Terms of Use (2021-12-29).pdf";
// import file2 from "./termsdocs/02 TRANSENERGY360 LLC - Legal Disclaimer (2021-29-12).pdf";
// import file3 from "./termsdocs/04 TRANSENERGY360 LLC - Privacy Policy (2021-29-12).pdf";

const FooterTab = () => {
  const [tab, setTab] = useState("Terms of Use");
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <form>
      <div>
        <Tabs activeKey={tab} onSelect={() => setTab()}>
          <Tab eventKey="Terms of Use" title="Terms of Use">
            {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js">
              <Viewer
                fileUrl={file}
                plugins={[
                  // Register plugins
                  defaultLayoutPluginInstance,
                ]}
              />
            </Worker> */}
            <iframe src="https://drive.google.com/file/d/1is-WPtb6IVBlx6FFOm5p-h8uRcQ1Eybc/preview"  allow="autoplay" width="100%" height="500px" frameborder="0"></iframe>
          </Tab>
          <Tab eventKey="Legal Disclaimer" title="Legal Disclaimer">
            <div>
              {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={file2}
                  plugins={[
                    // Register plugins
                    defaultLayoutPluginInstance,
                  ]}
                />
              </Worker> */}
              <iframe src="https://drive.google.com/file/d/1yxpfqhv2scDs1kZ9VgAxKpg75ZfhsKdS/preview"  allow="autoplay" width="100%" height="500px" frameborder="0"></iframe>
            </div>
          </Tab>

          <Tab eventKey="Privacy Policy" title="Privacy Policy">
            <div>
              {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={file3}
                  plugins={[
                    // Register plugins
                    defaultLayoutPluginInstance,
                  ]}
                />
              </Worker> */}
              {/* <iframe src="https://drive.google.com/file/d/1uJMCt0KGvWScchbr5p-eesD3OFG_OshB/preview"  allow="autoplay" width="100%" height="500px" frameborder="0"></iframe> */}
              <iframe src="https://drive.google.com/file/d/10XwgcvIR5j9bJlEZF95wbgS9ww2_r9bO/preview"  allow="autoplay" width="100%" height="500px" frameborder="0"></iframe>
            </div>
          </Tab>
        </Tabs>
      </div>
    </form>
  );
};

export default FooterTab;
