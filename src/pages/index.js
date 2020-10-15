import React from "react"

export default function Home() {
  return (
  <div>
    <h2>Dukkan Al Basha Demo Page</h2>
    <p>A demo site is currently under construction using Gastby</p>
    <p>Currently testing the automation of site content generation and upload from github using buddy</p>
    <h3>Steps involved:</h3>
    <ol>
      <li>Create a gatsby project on local machine</li>
      <li>Upload the project to a github repository</li>
      <li>Acquire a hosting service free/paid to host the gatsby site</li>
      <li>Not the FTP details provided by the hosting service</li>
      <li>Create a Buddy Works account</li>

        <ul>
          <li>It is perferable to login using github account</li>
          <li>Create a new project selecting github and the gatsby repository</li>
          <li>Set `push` as the trigger for the project actions</li>
          <li>Add and action. Buddy detects it is a gatsby project</li>
          <li>Add the bash commands `npm install` and `gatsby build`</li>
          <li>Creat another action of type FTP</li>
          <li>Add the setting from the hosting service to the FTP action setting</li>
        </ul>

    </ol>
  </div>
  )
}
