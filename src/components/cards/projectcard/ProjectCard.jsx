import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProjectCard.css";

import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

function ProjectCard({ project }) {
    /* 
    {
        "id": 420604572,
        "node_id": "R_kgDOGRHqnA",
        "name": "ASBL",
        "full_name": "Attachment-Studios/ASBL",
        "private": false,
        "owner": {
            "login": "Attachment-Studios",
            "id": 72270541,
            "node_id": "MDQ6VXNlcjcyMjcwNTQx",
            "avatar_url": "https://avatars.githubusercontent.com/u/72270541?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Attachment-Studios",
            "html_url": "https://github.com/Attachment-Studios",
            "followers_url": "https://api.github.com/users/Attachment-Studios/followers",
            "following_url": "https://api.github.com/users/Attachment-Studios/following{/other_user}",
            "gists_url": "https://api.github.com/users/Attachment-Studios/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Attachment-Studios/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Attachment-Studios/subscriptions",
            "organizations_url": "https://api.github.com/users/Attachment-Studios/orgs",
            "repos_url": "https://api.github.com/users/Attachment-Studios/repos",
            "events_url": "https://api.github.com/users/Attachment-Studios/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Attachment-Studios/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/Attachment-Studios/ASBL",
        "description": "Attachment Studios Basic License",
        "fork": false,
        "url": "https://api.github.com/repos/Attachment-Studios/ASBL",
        "forks_url": "https://api.github.com/repos/Attachment-Studios/ASBL/forks",
        "keys_url": "https://api.github.com/repos/Attachment-Studios/ASBL/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/Attachment-Studios/ASBL/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/Attachment-Studios/ASBL/teams",
        "hooks_url": "https://api.github.com/repos/Attachment-Studios/ASBL/hooks",
        "issue_events_url": "https://api.github.com/repos/Attachment-Studios/ASBL/issues/events{/number}",
        "events_url": "https://api.github.com/repos/Attachment-Studios/ASBL/events",
        "assignees_url": "https://api.github.com/repos/Attachment-Studios/ASBL/assignees{/user}",
        "branches_url": "https://api.github.com/repos/Attachment-Studios/ASBL/branches{/branch}",
        "tags_url": "https://api.github.com/repos/Attachment-Studios/ASBL/tags",
        "blobs_url": "https://api.github.com/repos/Attachment-Studios/ASBL/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/Attachment-Studios/ASBL/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/Attachment-Studios/ASBL/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/Attachment-Studios/ASBL/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/Attachment-Studios/ASBL/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/Attachment-Studios/ASBL/languages",
        "stargazers_url": "https://api.github.com/repos/Attachment-Studios/ASBL/stargazers",
        "contributors_url": "https://api.github.com/repos/Attachment-Studios/ASBL/contributors",
        "subscribers_url": "https://api.github.com/repos/Attachment-Studios/ASBL/subscribers",
        "subscription_url": "https://api.github.com/repos/Attachment-Studios/ASBL/subscription",
        "commits_url": "https://api.github.com/repos/Attachment-Studios/ASBL/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/Attachment-Studios/ASBL/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/Attachment-Studios/ASBL/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/Attachment-Studios/ASBL/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/Attachment-Studios/ASBL/contents/{+path}",
        "compare_url": "https://api.github.com/repos/Attachment-Studios/ASBL/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/Attachment-Studios/ASBL/merges",
        "archive_url": "https://api.github.com/repos/Attachment-Studios/ASBL/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/Attachment-Studios/ASBL/downloads",
        "issues_url": "https://api.github.com/repos/Attachment-Studios/ASBL/issues{/number}",
        "pulls_url": "https://api.github.com/repos/Attachment-Studios/ASBL/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/Attachment-Studios/ASBL/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/Attachment-Studios/ASBL/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/Attachment-Studios/ASBL/labels{/name}",
        "releases_url": "https://api.github.com/repos/Attachment-Studios/ASBL/releases{/id}",
        "deployments_url": "https://api.github.com/repos/Attachment-Studios/ASBL/deployments",
        "created_at": "2021-10-24T06:21:52Z",
        "updated_at": "2021-10-25T14:08:00Z",
        "pushed_at": "2021-10-25T14:48:22Z",
        "git_url": "git://github.com/Attachment-Studios/ASBL.git",
        "ssh_url": "git@github.com:Attachment-Studios/ASBL.git",
        "clone_url": "https://github.com/Attachment-Studios/ASBL.git",
        "svn_url": "https://github.com/Attachment-Studios/ASBL",
        "homepage": null,
        "size": 6552,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "Python",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": true,
        "has_discussions": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "allow_forking": true,
        "is_template": false,
        "web_commit_signoff_required": false,
        "topics": [

        ],
        "visibility": "public",
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "main"
    }
     */
    return (
        <div className="project-card">
            <a href={project.html_url} target="_blank" rel="noreferrer" className="project-link">
                <span className="project-name">
                    {project.name}
                </span>
                <span className="project-icon">
                    <FontAwesomeIcon icon={faExternalLink} />
                </span>
            </a>
        </div>
    );
}

export default ProjectCard;
