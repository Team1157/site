---
title: opensource
author: ada
createTime: 2024/08/16 21:45:00
permalink: /opensource/
---

<style>
    #repo-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 20px;
        padding-top: 20px;
    }
    .repo-card {
        border: 2px solid #2e2e32;
        border-radius: 6px;
        padding-left: 20px;
        padding-right: 20px;
        transition: transform 0.2s ease;
        text-align: left;
        background-color: #232327;
    }
    .repo-card:hover {
        transform: translateY(-5px);
    }
    h1 {
        color: #8cccd5;
        text-align: center;
    }
    h2 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }
    a {
        text-decoration: none;
        color: #8cccd5;
        font-weight: bold;
    }
    p {
        font-size: 1rem;
        margin: 10px 0;
    }
</style>

<div id="repo-container">
    <!-- Repositories will be injected here by the script below -->
</div>

<script>
    async function fetchRepos() {
        const username = 'team1157';
        const url = `https://api.github.com/users/${username}/repos`;

        try {
            const response = await fetch(url);
            const repos = await response.json();
            const repoContainer = document.getElementById('repo-container');

            repos.forEach(repo => {
                const repoCard = document.createElement('div');
                repoCard.className = 'repo-card';

                repoCard.innerHTML = `
                    <h2>
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </h2>
                    <p>
                        ${repo.description ? repo.description : "No description provided."}
                    </p>
                    <p>
                        <strong>Stars:</strong> ${repo.stargazers_count} | <strong>Forks:</strong> ${repo.forks_count}
                    </p>
                `;

                repoContainer.appendChild(repoCard);
            });
        } catch (error) {
            console.error('Error fetching repositories:', error);
        }
    }

    fetchRepos();
</script>
