

<title>Job Market Trends Analysis</title>
  <h1>Job Market Trends Analysis</h1>
  <p>An enriched data mart to analyze job market trends from 2021 to 2023 in several countries through conceptual design, physical design and data staging, OLAP queries, BI dashboard creation, and data mining.</p>

  <h2>Setup Instructions</h2>

  <h3>Local System</h3>
  <ul>
    <li>Install Python 3.x and Docker Engine (Docker Desktop)
      <ul>
        <li>Open Docker Desktop and leave it open. This keeps Docker Engine running for you to run Docker commands</li>
      </ul>
    </li>
  </ul>

  <h3>Python Environment</h3>
  <pre><code>
# Create a virtual environment and install Python dependencies
python -m venv venv
source venv/Scripts/activate  # Windows (git bash)
source venv/bin/activate      # UNIX

# Install all dependencies
pip install -r requirements.txt
  </code></pre>

  <h3>Database Instance</h3>
  <ul>
    <li>Make sure port 5432 is available
      <ul>
        <li>Stop the local Postgres service if it is running on your system</li>
      </ul>
    </li>
    <li>Create a file to store sensitive values, such as passwords
      <ul>
        <li>Create a file named <code>.env</code> in the root of the directory</li>
        <li>Open the file <code>.env.examples</code></li>
        <li>Copy the contents of <code>.env.examples</code> and paste it into <code>.env</code></li>
        <li>Replace the values with your own values</li>
      </ul>
    </li>
    <li>Pull Docker images and run the containers
      <ul>
        <li><code>docker compose up --build -d</code> to build the images and run the containers in the background</li>
        <li><code>docker ps</code> to verify that your containers are started</li>
        <li><code>docker compose down</code> to stop your running containers</li>
        <li><code>docker system prune -a</code> to delete all stopped images and containers</li>
      </ul>
    </li>
  </ul>

  <h3>Populate Database</h3>
  <p>Now that the database instance and the schema are created, the db needs to be populated:</p>
  <pre><code>python db/db.py</code></pre>
  <p>This populates all tables with data, including measurements.</p>

