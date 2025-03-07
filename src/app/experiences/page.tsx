import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import Animator from "@/components/Animator";
import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Link from "next/link";

function Work() {
    return (
        <>
            <Text id="work" as="h2" className="warning">
                Work Experiences
            </Text>
            <Animator manager="sequence">
                <Card
                    date="May 2022 -- Present"
                    title="Visiwise.co"
                    subtitle="Senior DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Reduced infrastructure costs by migrating workloads
                            to ARM64-based servers on Hetzner Cloud
                        </li>
                        <li>
                            Designed scalable Swarm clusters for staging and
                            production using Terragrunt, Terraform, and Ansible
                        </li>
                        <li>
                            Refactored codebases of 10+ projects to improve
                            deployment stability and maintainability (
                            <b>12-Factor</b>)
                        </li>
                        <li>
                            Migrated critical services to Docker Swarm to
                            optimize resource usage and simplify operations
                        </li>
                        <li>
                            Set up a PostgreSQL cluster with automated backups
                            and zero-downtime migration procedures using
                            pgbackrest
                        </li>
                        <li>
                            Automated provisioning across multiple environments
                            using Terraform and Ansible
                        </li>
                        <li>
                            Deployed self-hosted services like Sentry and GitLab
                            to reduce reliance on external SaaS providers
                        </li>
                        <li>
                            Built centralized monitoring with Grafana, Loki, and
                            Prometheus, and created custom dashboards
                        </li>
                        <li>
                            Configured Grafana OnCall with escalation policies
                            and on-call schedules for incident management
                        </li>
                        <li>
                            Standardized CI/CD pipelines to improve build and
                            deployment speed across all projects
                        </li>
                        <li>
                            Maintained a multi-cloud setup on Hetzner and AWS to
                            balance availability and infrastructure costs
                        </li>
                        <li>
                            Implemented review apps to provide preview
                            environments for testing and QA
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Jan 2024 -- Sep 2024"
                    title="Smartech"
                    subtitle="Senior DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Standardized CI/CD templates across 50+ repositories
                            to unify deployment processes
                        </li>
                        <li>
                            Deployed and managed Kafka clusters using Ansible,
                            ensuring reliable event streaming
                        </li>
                        <li>
                            Operated ClickHouse clusters with 50TB+ of
                            time-series data for real-time analytics
                        </li>
                        <li>
                            Automated ClickHouse backups and handled production
                            schema migrations
                        </li>
                        <li>
                            Built an automatically scalable RKE2 cluster on
                            Hetzner with Terraform and Ansible
                        </li>
                        <li>
                            Integrated Cluster Autoscaler to dynamically scale
                            nodes based on workload
                        </li>
                        <li>
                            Developed a Custom Pod Autoscaler (CPA) to scale
                            workers based on Kafka consumer lag
                        </li>
                        <li>
                            Created Kubernetes manifests for 20+ microservices
                            and managed deployments via ArgoCD
                        </li>
                        <li>
                            Automated server management for 50+ nodes with
                            Ansible, covering firewall and user setups
                        </li>
                        <li>
                            Maintained 100+ VMs and ensured availability of
                            Kafka, ClickHouse, and ScyllaDB clusters
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Jul 2022 -- Jun 2023"
                    title="University of Tehran"
                    subtitle="DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Provisioned a 20+ node HPC cluster using Terraform
                            and Ansible; set up Slurm with Singularity and
                            Nvidia Enroot
                        </li>
                        <li>
                            Optimized GPU workloads for 10+ researchers by
                            integrating Nvidia Enroot with Slurm via Nvidia
                            Pyxis
                        </li>
                        <li>
                            Managed permissions and quotas for 200+ users and
                            created 5+ resource-specific queues for jobs
                        </li>
                        <li>
                            Deployed a Grafana monitoring stack to monitor
                            cluster resources and workloads
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Mar 2022 -- Jun 2022"
                    title="Pishgam Vira"
                    subtitle="DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Provisioned Docker Swarm clusters and database
                            servers with Ansible across 3+ environments
                        </li>
                        <li>
                            Wrote Docker Compose manifests for streamlined
                            deployments
                        </li>
                        <li>
                            Set up CI/CD pipelines for 5+ repositories using
                            GitHub Actions
                        </li>
                        <li>Automated versioning with semantic-release</li>
                    </ul>
                </Card>
                <Card
                    date="Nov 2019 -- Jun 2022"
                    title="Mobtaker Darya"
                    subtitle="Full-stack Developer & DevOps Engineer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Maintained and developed the CCS project, generating
                            50+ reports with Crystal Reports and SQL Server
                        </li>
                        <li>
                            Developed the Shaahin project with a ReactJS
                            frontend and Hasura/PostgreSQL backend
                        </li>
                        <li>
                            Implemented CI/CD pipelines using GitLab CI and
                            Docker
                        </li>
                        <li>
                            Provisioned servers with Kubernetes, writing
                            manifests and packaging them in Helm Charts
                        </li>
                        <li>
                            Managed infrastructure using Terraform and Ansible
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Mar 2019 -- Oct 2019"
                    title="Tolou Yekta Samaneh"
                    subtitle="Full-stack Developer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Maintained and refactored the Managed-Funds System
                            (MFD) using Loopback.io, Node.js, TypeScript, and
                            PostgreSQL
                        </li>
                        <li>
                            Replaced Process360 with ProcessMaker as the BPMS
                            core and developed a new UI using ReactJS and
                            TypeScript
                        </li>
                        <li>
                            Implemented form generators in the client with
                            schema integration from BPMS
                        </li>
                        <li>
                            Developed a food-shopping UI for the Farmeal project
                            using ReactJS, MaterialUI, Apollo Client, and
                            TypeScript
                        </li>
                        <li>
                            Set up CI/CD pipelines using GitLab CI and Docker
                            for ManagedFunds and Farmeal projects
                        </li>
                    </ul>
                </Card>
                <Card
                    date="Dec 2013 -- Aug 2018"
                    title="ChaM (Chapar Messenger)"
                    subtitle="Founder & Lead Developer"
                    location="Tehran, Iran"
                >
                    <ul>
                        <li>
                            Designed and developed an audio/video messaging
                            platform using C, Erlang, and Java
                        </li>
                        <li>
                            Implemented P2P connections and used
                            Cassandra/ScyllaDB for chat data management
                        </li>
                        <li>
                            Created a desktop client with Qt/QML (C++) and an
                            Android app with Java and JNI
                        </li>
                        <li>
                            Integrated FFMPEG for audio/video streaming with
                            native APIs
                        </li>
                        <li>
                            Managed full-stack development, including server
                            infrastructure and client interfaces
                        </li>
                    </ul>
                </Card>
            </Animator>
        </>
    );
}

function Research() {
    return (
        <>
            <Text id="research" as="h2" className="warning">
                Research Experiences
            </Text>
            <Animator manager="sequence">
                <Card
                    date="Feb 2023 -- Aug 2024"
                    title="Graduate Research Assistant"
                    subtitle="Department of Mathematics, Statistics and Computer Science"
                    location="University of Tehran"
                >
                    <b>Advisor:</b> Prof. Bagher Babaali
                    <ul>
                        <li>
                            Researching deep learning-based seizure detection
                            with GNNs and bio-signal transformers
                        </li>
                        <li>
                            Implemented the model using PyTorch, PyTorch
                            Geometric, and PyTorch Lightning
                        </li>
                        <li>Used Captum for model interpretability</li>
                        <li>Monitored metrics with TensorBoard</li>
                    </ul>
                </Card>
            </Animator>
        </>
    );
}

function Teaching() {
    return (
        <>
            <Text id="teaching" as="h2" className="warning">
                Teaching Experiences
            </Text>
            <Animator manager="sequence">
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
                            Organized and managed homework assignments for
                            mentored students
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
                            Instructed students on the basics of computer
                            graphics and OpenGL programming in C{" "}
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
                        <li>
                            Taught basic data structures and algorithms in Java
                        </li>
                        <li>
                            Organized and managed homework assignments for
                            students
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
            </Animator>
        </>
    );
}

export default function Page() {
    return (
        <>
            <Hero image="/images/break_projects.jpg" height="70vh">
                <Text as="h1">Experiences</Text>
            </Hero>
            <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Work />
                    <Frame as="hr" className="my-8" />
                    <Research />
                    <Frame as="hr" className="my-8" />
                    <Teaching />
                </div>
            </section>
        </>
    );
}
