import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

function Experiences() {
    return (
        <>
            <Text id="work" as="h2" className="warning">
                Work Experiences
            </Text>
            <Card
                date="May 2022 -- Present"
                title="Visiwise.co"
                subtitle="Senior DevOps Engineer (Full-time)"
                location="Calgary, Canada"
            >
                <ul>
                    <li>
                        Cut infrastructure costs by migrating workloads to ARM64
                        on Hetzner and consolidating services on Docker Swarm
                    </li>
                    <li>
                        Designed scalable Swarm clusters for staging and
                        production using Terragrunt, Terraform, and Ansible
                    </li>
                    <li>
                        Improved deployment stability across 10+ projects by
                        refactoring toward 12‑Factor practices
                    </li>
                    <li>
                        Delivered Postgres HA with PgCat; automated backups and
                        zero‑downtime migrations
                    </li>
                    <li>
                        Centralized observability with Grafana/Loki/Prometheus,
                        and set up Grafana OnCall with escalation policies
                    </li>
                    <li>
                        Standardized CI/CD; added review apps, scheduled E2E
                        tests, and enabled Renovate for private GitLab
                        registries
                    </li>
                    <li>
                        Migrated uptime monitoring to BetterStack with
                        escalation chains (call/SMS)
                    </li>
                    <li>
                        Automated provisioning across environments; self‑hosted
                        Sentry and GitLab to reduce SaaS spend
                    </li>
                    <li>
                        Migrated core services to Google Cloud Platform (GCP);
                        operate multi‑cloud across AWS, GCP, and Hetzner
                    </li>
                </ul>
            </Card>
            <Card
                date="Jul 2024 -- Oct 2024"
                title="Faraatar Entrepreneurship Group"
                subtitle="Senior DevOps Engineer (Contract)"
                location="Tehran, Iran"
            >
                <ul>
                    <li>
                        Built a multi-tenant CRM SaaS platform using Kubernetes
                        and Terraform
                    </li>
                    <li>
                        Standardized CI/CD pipelines for GitLab projects and
                        environments
                    </li>
                    <li>
                        Shipped a licensed CRM runtime for on-prem customers
                        using Apptainer with encrypted containers
                    </li>
                    <li>
                        Developed a Golang agent to securely fetch and run the
                        latest licensed images while protecting source code
                    </li>
                </ul>
            </Card>
            <Card
                date="Jan 2024 -- Sep 2024"
                title="Smartech"
                subtitle="Senior DevOps Engineer (Full-time)"
                location="Tehran, Iran"
            >
                <ul>
                    <li>
                        Standardized CI/CD templates across 50+ repositories to
                        unify deployment processes
                    </li>
                    <li>
                        Deployed and managed Kafka clusters using Ansible,
                        ensuring reliable event streaming
                    </li>
                    <li>
                        Operated ClickHouse clusters with 50TB+ of time-series
                        data for real-time analytics
                    </li>
                    <li>
                        Automated ClickHouse backups and handled production
                        schema migrations
                    </li>
                    <li>
                        Built an automatically scalable RKE2 cluster on Hetzner
                        with Terraform and Ansible
                    </li>
                    <li>
                        Integrated Cluster Autoscaler to dynamically scale nodes
                        based on workload
                    </li>
                    <li>
                        Developed a Custom Pod Autoscaler (CPA) to scale workers
                        based on Kafka consumer lag
                    </li>
                    <li>
                        Created Kubernetes manifests for 20+ microservices and
                        managed deployments via ArgoCD
                    </li>
                    <li>
                        Automated server management for 50+ nodes with Ansible,
                        covering firewall and user setups
                    </li>
                    <li>
                        Maintained 100+ VMs and ensured availability of Kafka,
                        ClickHouse, and ScyllaDB clusters
                    </li>
                </ul>
            </Card>
            <Card
                date="Jul 2022 -- Jun 2023"
                title="University of Tehran"
                subtitle="DevOps Engineer (Part-time)"
                location="Tehran, Iran"
            >
                <ul>
                    <li>
                        Provisioned a 20+ node HPC cluster using Terraform,
                        Ansible, Slurm, Singularity, and Nvidia Enroot
                    </li>
                    <li>
                        Optimized GPU workloads for 10+ researchers by
                        integrating Nvidia Enroot with Slurm via Nvidia Pyxis
                    </li>
                    <li>
                        Managed permissions and quotas for 200+ users and
                        created 5+ resource-specific queues for jobs
                    </li>
                    <li>
                        Deployed a Grafana monitoring stack to monitor cluster
                        resources and workloads
                    </li>
                </ul>
            </Card>
            <Card
                date="Mar 2022 -- Jun 2022"
                title="Pishgam Vira"
                subtitle="DevOps Engineer (Part-time)"
                location="Tehran, Iran"
            >
                <ul>
                    <li>
                        Provisioned Docker Swarm clusters and database servers
                        with Ansible across 3+ environments
                    </li>
                    <li>
                        Wrote Docker Compose manifests for streamlined
                        deployments
                    </li>
                    <li>
                        Set up CI/CD pipelines for 5+ repositories using GitHub
                        Actions
                    </li>
                    <li>Automated versioning with semantic-release</li>
                </ul>
            </Card>
            <Card
                date="Nov 2019 -- Jun 2022"
                title="Mobtaker Darya"
                subtitle="Full-stack Developer & DevOps Engineer (Full-time)"
                location="Tehran, Iran"
            >
                <ul>
                    <li>
                        Maintained and developed the CCS project, generating 50+
                        reports with Crystal Reports and SQL Server
                    </li>
                    <li>
                        Developed the Shaahin project with a ReactJS frontend
                        and Hasura/PostgreSQL backend
                    </li>
                    <li>
                        Implemented CI/CD pipelines using GitLab CI and Docker
                    </li>
                    <li>
                        Provisioned servers with Kubernetes, writing manifests
                        and packaging them in Helm Charts
                    </li>
                    <li>Managed infrastructure using Terraform and Ansible</li>
                </ul>
            </Card>
            <Card
                date="Mar 2019 -- Oct 2019"
                title="Tolou Yekta Samaneh"
                subtitle="Full-stack Developer (Part-time)"
                location="Tehran, Iran"
            >
                <ul>
                    <li>
                        Maintained and refactored the Managed-Funds System (MFD)
                        using Loopback.io, Node.js, TypeScript, and PostgreSQL
                    </li>
                    <li>
                        Replaced Process360 with ProcessMaker as the BPMS core
                        and developed a new UI using ReactJS and TypeScript
                    </li>
                    <li>
                        Implemented form generators in the client with schema
                        integration from BPMS
                    </li>
                    <li>
                        Developed a food-shopping UI for the Farmeal project
                        using ReactJS, MaterialUI, Apollo Client, and TypeScript
                    </li>
                    <li>
                        Set up CI/CD pipelines using GitLab CI and Docker for
                        ManagedFunds and Farmeal projects
                    </li>
                </ul>
            </Card>
            <Card
                date="Dec 2013 -- Aug 2018"
                title="ChaM (Chapar Messenger)"
                subtitle="Founder & Lead Developer (Self-employed)"
                location="Tehran, Iran"
            >
                <ul>
                    <li>
                        Designed and developed an audio/video messaging platform
                        using C, Erlang, and Java
                    </li>
                    <li>
                        Implemented P2P connections and used Cassandra/ScyllaDB
                        for chat data management
                    </li>
                    <li>
                        Created a desktop client with Qt/QML (C++) and an
                        Android app with Java and JNI
                    </li>
                    <li>
                        Integrated FFMPEG for audio/video streaming with native
                        APIs
                    </li>
                    <li>
                        Managed full-stack development, including server
                        infrastructure and client interfaces
                    </li>
                </ul>
            </Card>
            <Text id="research" as="h2" className="warning">
                Research Experiences
            </Text>
            <Card
                date="Feb 2023 -- Aug 2024"
                title="Graduate Research Assistant"
                subtitle="Department of Mathematics, Statistics and Computer Science"
                location="University of Tehran"
            >
                <b>Advisor:</b> Prof. Bagher Babaali
                <ul>
                    <li>
                        Researched deep learning-based seizure detection with
                        GNNs and bio-signal transformers
                    </li>
                    <li>
                        Implemented the model using PyTorch, PyTorch Geometric,
                        and PyTorch Lightning
                    </li>
                    <li>Used Captum for model interpretability</li>
                    <li>Monitored metrics with TensorBoard</li>
                </ul>
            </Card>
            <Text id="teaching" as="h2" className="warning">
                Teaching Experiences
            </Text>
            <Card
                date="Oct 2023 -- Feb 2024"
                title="Machine Learning"
                subtitle="Prof. Bagher Babaali"
                location="University of Tehran"
            >
                <ul>
                    <li>
                        Assisted in teaching machine learning topics and
                        troubleshooting student issues
                    </li>
                    <li>
                        Organized and managed homework assignments for mentored
                        students
                    </li>
                </ul>
            </Card>
            <Card
                date="Feb 2019 -- Jun 2019"
                title="Advanced Programming"
                subtitle="Prof. Arash Ahadi"
                location="Kharazmi University"
            >
                <ul>
                    <li>
                        Taught memory management in C and Object-Oriented
                        programming in C (OOC){" "}
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/ooc_lecture"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Instructed students on the basics of computer graphics
                        and OpenGL programming in C{" "}
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/opengl"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Graded assignments and provided feedback to students
                    </li>
                </ul>
            </Card>
            <Card
                date="Sep 2018 -- Jan 2019"
                title="Basic Programming"
                subtitle="Prof. Saeed Reza Kheradpisheh"
                location="Kharazmi University"
            >
                <ul>
                    <li>Taught basic data structures and algorithms in Java</li>
                    <li>
                        Organized and managed homework assignments for students
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/Phy97Sources"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                </ul>
            </Card>
        </>
    );
}

function Honors() {
    return (
        <>
            <Text as="h2" className="warning mb-4">
                Honors & Awards
            </Text>
            <ul>
                <li>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <p className="text-start md:text-end mb-2 md:mb-0">
                            Ranked 18th in the Iranian university entrance exam
                            for the Master&apos;s Degree in Computer Science
                        </p>
                        <b>2021</b>
                    </div>
                </li>
                <li>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <p className="text-start md:text-end mb-2 md:mb-0">
                            Ranked top 1% among more than 190,000 students who
                            participated in nationwide entrance examination of
                            undergraduate studies in Iranian universities
                        </p>
                        <b>2016</b>
                    </div>
                </li>
            </ul>
        </>
    );
}

function Skills() {
    return (
        <>
            <Text as="h2" className="warning mb-4">
                Technical Skills
            </Text>
            <ul>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Programming Languages</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            C/C++, C#, Java, JavaScript, TypeScript, Python,
                            Erlang, Golang, MATLAB
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Client Development</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            HTML/CSS, Tailwind CSS, React, React Native, Android
                            Studio, Electron JS, Qt/QML (C++)
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Machine/Deep Learning</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            NumPy, OpenCV, Pandas, Seaborn, Matplotlib, PyTorch,
                            TensorFlow, Hugging Face, scikit-learn
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Storage & Database</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            PostgreSQL, MSSQL, MySQL, SQLite, ScyllaDB,
                            ClickHouse, RabbitMQ, Kafka, Redis, MinIO
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Container Orchestration</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Podman, Docker, Docker Compose, Docker Swarm,
                            Kubernetes (K3s, RKE2, EKS), Helm, Nomad
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>High Performance Computing</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Slurm, Sun Grid Engine, Rocks Cluster, NVIDIA
                            Enroot, NVIDIA Pyxis, Singularity, Apptainer
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Infrastructure & Cloud</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Terragrunt, Terraform, Ansible, Packer, ESXi,
                            OpenStack, Hetzner Cloud, GCP, AWS
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Monitoring & Alerting</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Grafana, Grafana OnCall, Prometheus, Promtail,
                            OpenTelemetry, Loki, Mimir, Tempo, Alloy
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>CI/CD & Automation</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            Drone CI, GitLab CI, Travis CI, GitHub Actions,
                            Azure Pipelines, Argo CD, GitOps
                        </i>
                    </div>
                </li>
                <li className="w-full pr-8">
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <b>Workflow Automation</b>
                        <i className="text-start md:text-end mb-2 md:mb-0">
                            N8n, Temporal, Camunda (BPMS), ProcessMaker (BPMS),
                            Process360 (BPMS)
                        </i>
                    </div>
                </li>
            </ul>
        </>
    );
}

function Education() {
    return (
        <>
            <Text as="h2" className="warning mb-4">
                Education
            </Text>
            <Card
                logo="/images/tehran_university.jpg"
                date="Sep 2021 -- Aug 2024"
                title="M.Sc in Computer Science"
                subtitle="University of Tehran"
                location="Tehran, Iran"
            >
                <ul className="grid grid-cols-1">
                    <li className="w-full md:pr-8">
                        GPA: <b>17.74 / 20</b>
                    </li>
                    <li className="w-full md:pr-8">
                        Thesis:{" "}
                        <b>
                            Seizure detection from multi-channel EEG using Graph
                            Neural Networks
                        </b>
                    </li>
                </ul>
                <Frame as="hr" className="my-2" />
                <Text as="h4" className="secondary">
                    Covered Courses
                </Text>
                <ul className="grid grid-cols-1">
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Digital Image Processing</b>
                            <i>17/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Natural Language Processing</b>
                            <i>19.12/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Advanced Computation Theory</b>
                            <i>18.5/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Advanced Theory of Algorithms</b>
                            <i>14.75/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Machine Learning</b>
                            <i>18.45/20</i>
                        </div>
                    </li>
                </ul>
            </Card>
            <Card
                logo="/images/kharazmi_university.jpg"
                date="Sep 2016 -- Jan 2021"
                title="B.Sc in Computer Science"
                subtitle="Kharazmi University"
                location="Tehran, Iran"
            >
                <ul className="grid grid-cols-1">
                    <li className="w-full md:pr-8">
                        Last two years GPA: <b>16.98 / 20</b>
                    </li>
                    <li className="w-full md:pr-8">
                        Total GPA: <b>16.12 / 20</b>
                    </li>
                </ul>
                <Frame as="hr" className="my-2" />
                <Text as="h4" className="secondary">
                    Selected Courses
                </Text>
                <ul className="grid grid-cols-1">
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Artificial Intelligence</b>
                            <i>19.1/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Computer Graphics</b>
                            <i>20/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Principles of Operating Systems</b>
                            <i>20/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Principles of Computer Systems</b>
                            <i>20/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Principles of Logic and Set Theory</b>
                            <i>20/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Compiler</b>
                            <i>20/20</i>
                        </div>
                    </li>
                    <li className="w-full md:pr-8">
                        <div className="flex justify-between">
                            <b>Database</b>
                            <i>19/20</i>
                        </div>
                    </li>
                </ul>
            </Card>
            <Card
                logo="/images/mandegar_alborz_highschool.jpg"
                date="Sep 2012 -- Aug 2016"
                title="Diploma of Mathematics and Physics"
                subtitle="Mandegar Alborz High School"
                location="Tehran, Iran"
            >
                <ul className="grid grid-cols-1">
                    <li className="w-full md:pr-8">
                        High school GPA: <b>18.59 / 20</b>
                    </li>
                    <li className="w-full md:pr-8">
                        Pre-university GPA: <b>18.03 / 20</b>
                    </li>
                </ul>
            </Card>
        </>
    );
}

function Licenses() {
    return (
        <>
            <Text as="h2" className="warning mb-4">
                Licenses & Certifications
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                <Card
                    logo="/assets/mcp.png"
                    title="Fundamentals of MCP"
                    subtitle="Hugging Face"
                    date="Jul 2025"
                    modalable
                />
                <Card
                    logo="/assets/agents.png"
                    title="AI Agents Fundamentals"
                    subtitle="Hugging Face"
                    date="Apr 2025"
                    modalable
                />
                <Card
                    logo="/assets/nbml.png"
                    title="Brain Mapping Spring School"
                    subtitle="National Brain Mapping Laboratory"
                    date="Apr 2023"
                    modalable
                >
                    <Text as="h4" className="secondary">
                        Covered Topics
                    </Text>
                    <ul className="grid grid-cols-1">
                        <li className="w-full md:pr-8">
                            Fundamentals of neuroscience, cognitive science and
                            brain mapping
                        </li>
                        <li className="w-full md:pr-8">
                            Introduction to anatomy and physiology of the brain
                        </li>
                        <li className="w-full md:pr-8">
                            Fundamentals of EEG, MRI, fNIRS, iTMS/TES, and
                            neurofeedback
                        </li>
                        <li className="w-full md:pr-8">
                            Introduction to virtual reality and eye tracking
                            technology
                        </li>
                        <li className="w-full md:pr-8">
                            Introduction to cognitive assessment and
                            rehabilitation tools
                        </li>
                        <li className="w-full md:pr-8">
                            Machine intelligence (application of artificial
                            intelligence in visual neuroscience)
                        </li>
                    </ul>
                </Card>
                <Card
                    logo="/assets/cka.png"
                    title="Certified Kubernetes Administrator (CKA)"
                    subtitle="Udemy"
                    date="Oct 2020"
                    modalable
                >
                    <Text as="h4" className="secondary">
                        Covered Topics
                    </Text>
                    <ul>
                        <li className="w-full md:pr-8">
                            <b>Core Concepts:</b> Cluster architecture, API
                            primitives, services, and networking
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Scheduling:</b> Labels, selectors, resource
                            limits, manual and automatic scheduling, taints,
                            tolerations, and node affinity
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Logging & Monitoring:</b> Monitoring cluster
                            components and managing application logs
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Application Lifecycle Management:</b> Rolling
                            updates, rollbacks, deployments, jobs, CronJobs,
                            ConfigMaps, Secrets, and multi-container pods
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Cluster Maintenance:</b> Cluster upgrades,
                            operating system upgrades, backup, and restore
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Security:</b> Authentication, authorization, TLS
                            certificates, network policies, security contexts,
                            and secure images
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Storage:</b> Persistent Volumes, Persistent
                            Volume Claims, storage classes, and applications
                            with persistent storage
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Networking:</b> Network primitives, pod
                            networking, CNI, service networking, and Ingress
                        </li>
                        <li className="w-full md:pr-8">
                            Installation, Configuration & Validation,
                            Troubleshooting
                        </li>
                    </ul>
                </Card>
                <Card
                    logo="/assets/ckad.png"
                    title="Kubernetes Certified Application Developer (CKAD)"
                    subtitle="Udemy"
                    date="Aug 2020"
                    modalable
                >
                    <Text as="h4" className="secondary">
                        Covered Topics
                    </Text>
                    <ul>
                        <li className="w-full md:pr-8">
                            <b>Core Concepts:</b> Cluster architecture, API
                            primitives, Pods, YAML, ReplicaSets, Deployments,
                            Namespaces, and imperative commands
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Configuration:</b> Configuring containers,
                            Multi-container pods, ConfigMaps, Secrets, resource
                            requirements, security contexts, and service
                            accounts
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Observability:</b> Readiness and liveness probes,
                            container logging, and monitoring applications
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Pod Design:</b> Labels, selectors, annotations,
                            rolling updates, rollbacks, Jobs, and CronJobs
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Services & Networking:</b> Services,
                            NetworkPolicies, and Ingress
                        </li>
                        <li className="w-full md:pr-8">
                            <b>State Persistence:</b> Volumes, Persistent
                            Volumes, Persistent Volume Claims, and storage
                            classes
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Security:</b> Authentication, authorization,
                            RBAC, cluster roles, role bindings, admission
                            controllers, and custom resource definitions
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Additional topics</b>: Helm fundamentals,
                            Kubernetes challenges, certification tips, lightning
                            labs, and mock exams
                        </li>
                    </ul>
                </Card>
                <Card
                    logo="/assets/swarm.png"
                    title="Docker - SWARM - Hands-on - DevOps"
                    subtitle="Udemy"
                    date="Jun 2020"
                    modalable
                >
                    <Text as="h4" className="secondary">
                        Covered Topics
                    </Text>
                    <ul>
                        <li className="w-full md:pr-8">
                            <b>Docker Compose:</b> In-depth concepts, Hands-on
                            exercises
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Docker Swarm:</b> Architecture and concepts,
                            Setting up a Swarm cluster, Managing services,
                            discovery, and load balancing
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Docker Stacks:</b> Deploying multi-service
                            applications, Placement constraints
                        </li>
                        <li className="w-full md:pr-8">
                            <b>CI/CD with Docker:</b> Integration and workflow,
                            Docker Registry setup and usage
                        </li>
                        <li className="w-full md:pr-8">
                            Advanced networking with overlay networks
                        </li>
                    </ul>
                </Card>
                <Card
                    logo="/assets/ccna.png"
                    title="Cisco Certified Network Associate (CCNA)"
                    subtitle="Tehran Institute of Technology"
                    date="Nov 2016"
                    modalable
                >
                    <Text as="h4" className="secondary">
                        Covered Topics
                    </Text>
                    <ul>
                        <li className="w-full md:pr-8">
                            <b>Network Fundamentals:</b> OSI and TCP/IP models,
                            IP addressing and subnetting, Network components
                            (routers, switches, etc.)
                        </li>

                        <li className="w-full md:pr-8">
                            <b>LAN Switching Technologies:</b> Ethernet and
                            switching concepts, VLANs and Inter-VLAN routing,
                            Spanning Tree Protocol (STP)
                        </li>

                        <li className="w-full md:pr-8">
                            <b>Routing Technologies:</b> IP routing concepts,
                            Static and dynamic routing, Routing protocols
                            (RIPv2, EIGRP, OSPF)
                        </li>

                        <li className="w-full md:pr-8">
                            <b>WAN Technologies:</b> WAN concepts and
                            technologies, Point-to-Point Protocol (PPP), Frame
                            Relay
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Infrastructure Services:</b> Dynamic Host
                            Configuration Protocol (DHCP), Network Address
                            Translation (NAT), Network Time Protocol (NTP)
                        </li>

                        <li className="w-full md:pr-8">
                            <b>Infrastructure Maintenance:</b> Device management
                            and maintenance, IOS backup and restore, Network
                            troubleshooting
                        </li>
                        <li className="w-full md:pr-8">
                            <b>Infrastructure Security:</b> Access control lists
                            (ACLs), Device security features, Remote access
                            (Telnet, SSH)
                        </li>
                    </ul>
                </Card>
            </div>
        </>
    );
}

export default function Page() {
    return (
        <>
            <Hero id="cv" image="/images/break_resume.jpg" height="70vh">
                <Link
                    href="/assets/Mohammad_Hossein_Nemati_CV_en.pdf"
                    target="_blank"
                >
                    <Frame
                        as="button"
                        size="small"
                        type="hftagon"
                        className="mt-8 px-8 py-4"
                    >
                        Download CV
                    </Frame>
                </Link>
            </Hero>
            <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Experiences />
                    <Frame as="hr" className="my-8" />
                    <Skills />
                    <Frame as="hr" className="my-8" />
                    <Honors />
                    <Frame as="hr" className="my-8" />
                    <Education />
                    <Frame as="hr" className="my-8" />
                    <Licenses />
                </div>
            </section>
        </>
    );
}
