## Description

- NodeJs application with frontend and backennd APIa which leverages OpenAI LLM model to convert prompt to SQL query
- This Application could be integerated with any platform with database connection to have easy to generate complex sql queryies and fetching of data from SQL database

## Tech stack 

- LLM models
- OpenAI API
- Reactjs
- Nodejs

## App setup

- Run NPM install on both client and server folder
- Run NPM run in client
- Run NPM start in server
- Hit the client URL to visit the application
## Application UI:

<img src="Application_ui_Screenshot.png">

## Application flow:

<img src="Output.png">


## My Thoughts and Applications of this App and usage for future :
- The above example is far more stretched version with description of current database tables
- The scope of future is to implement this for specific application backend database where the LLM could have understanding of the different tables fed to it  and that could be leveraged to have more simplified version of it.
- A broader applicaton would be used in a cloud storage or Big Data solutuions like AWS S3 or BigQuery from GCP where the tables are created from a unstructured cleaned data through ETL pipelines and then LLM prompt to query generator could be implemented to fetch required data for analysis with simple prompt when handling a database of big scale.
- This relates to my Taxi Analytics and Youtube analytics project which uses ETL through GCP and AWS respectively and loads the data to the final stage and integration of this with an ETL pipeline will be a potential future work
- Recently Snowflakes Dev Conference introduced Snowflakes BUILD and its dependency with OpenAI for building a prompt based solution for converting a unstructured to structured.
- Provided a excellent indegenious LLM and an API for it to plugin, this could be potentially implemented for any Enterprise Application within a Organisation security layer for improving  productivity of data analytics.




