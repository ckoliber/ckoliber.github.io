import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import Frame from "@/components/Frame";
import Text from "@/components/Text";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Link from "next/link";

function Published() {
    return (
        <>
            <Text id="published" as="h2" className="warning">
                Published Projects
            </Text>
            <Card
                date=""
                link="https://github.com/ckoliber/gocrud"
                title="GoCRUD"
                subtitle="Go Module"
                location=""
            >
                <ul>
                    <li>
                        Seamless Huma integration: register a repository and get
                        CRUD routes generated for your model
                    </li>
                    <li>
                        Endpoints out of the box: GET list/by-id, POST, PUT,
                        DELETE for any model
                    </li>
                    <li>
                        Strong input validation via Go struct tags
                        (required/min/max/maxLength, examples, docs)
                    </li>
                    <li>
                        Customizable before/after hooks per method to enforce
                        business rules and side effects
                    </li>
                    <li>
                        Flexible config per method (Get/Put/Post/Delete modes)
                        to enable bulk/single behaviors
                    </li>
                    <li>
                        Relation filtering: query parents by child fields via
                        declared relations
                    </li>
                    <li>
                        Custom field operations: add type-safe operators (e.g.,
                        _regexp, _iregexp) on selected fields
                    </li>
                </ul>
            </Card>
            <Card
                date=""
                title="Ravand BPMS"
                subtitle="Personal Project"
                location=""
            >
                <ul>
                    <li>
                        UI platform built on Camunda 8 (Zeebe) with advanced
                        forms renderer and DMS integrations
                    </li>
                    <li>
                        BPMN viewer/editor using BPMN.io with custom extensions
                    </li>
                    <li>
                        Tech: Vite, React, BPMN.io, GitHub Actions, Semantic
                        Release, Renovate, DevContainers
                    </li>
                </ul>
            </Card>
            <Card
                date=""
                title="Ansible Roles"
                subtitle="Open Source"
                location=""
            >
                <ul>
                    <li>
                        <a
                            href="https://github.com/ckoliber/ansible-role-swarm"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>ansible-role-swarm</b>
                        </a>
                        : Installs Docker and bootstraps a Swarm with
                        managers/workers, overlay network, and prune cron
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/ansible-role-swarm"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/ansible-role-wireguard"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>ansible-role-wireguard</b>
                        </a>
                        : Installs and configures WireGuard Site-to-Site VPN on
                        multiple servers
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/ansible-role-wireguard"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                </ul>
            </Card>
            <Card
                date=""
                title="Terraform Modules"
                subtitle="Open Source"
                location=""
            >
                <ul>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-google-cluster"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-google-cluster</b>
                        </a>
                        : General-purpose cluster provisioner for Google Cloud
                        (Swarm/Kubernetes/Nomad) with server groups and load
                        balancers
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-google-cluster"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-google-network"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-google-network</b>
                        </a>
                        : Creates VPCs, subnets, routes, and firewall rules on
                        Google Cloud
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-google-network"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-hcloud-network"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-hcloud-network</b>
                        </a>
                        : Creates networks, subnets, routes, and firewalls on
                        Hetzner Cloud
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-hcloud-network"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-hcloud-cluster"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-hcloud-cluster</b>
                        </a>
                        : General-purpose cluster provisioner for Hetzner Cloud
                        (Swarm/Kubernetes/Nomad) with servers, volumes, and load
                        balancers
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-hcloud-cluster"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-module-ansible"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-module-ansible</b>
                        </a>
                        : Generates dynamic inventory from SSH/WinRM connections
                        and runs ansible-playbook from Terraform
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-module-ansible"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-module-rke"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-module-rke</b>
                        </a>
                        : Bootstraps K3s/RKE2 clusters over SSH/WinRM (an
                        alternative to k3sup)
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-module-rke"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-hcloud-rke"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-hcloud-rke</b>
                        </a>
                        : Provisions K3s/RKE2 on Hetzner Cloud and installs CCM,
                        CSI, and Cluster Autoscaler
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-hcloud-rke"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-hcloud-wireguard"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-hcloud-wireguard</b>
                        </a>
                        : Creates a WireGuard VPN instance on Hetzner Cloud
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-hcloud-wireguard"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-aws-wireguard"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-aws-wireguard</b>
                        </a>
                        : Creates a WireGuard VPN instance on AWS
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-aws-wireguard"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-openstack-rke"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-openstack-rke</b>
                        </a>
                        : Bootstraps HA K3s/RKE2 clusters on OpenStack
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-openstack-rke"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-openstack-network"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-openstack-network</b>
                        </a>
                        : Creates networks, subnets, and routers on OpenStack
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-openstack-network"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-kubernetes-x509"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-kubernetes-x509</b>
                        </a>
                        : Creates X.509 users and role bindings in Kubernetes
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-kubernetes-x509"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-kubernetes-environment"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-kubernetes-environment</b>
                        </a>
                        : Provisions namespaced environments (quota, registry
                        secret) in Kubernetes
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-kubernetes-environment"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-gitlab-application"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-gitlab-application</b>
                        </a>
                        : Manages GitLab groups, projects, and default
                        organization policies
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-gitlab-application"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/terraform-gitlab-environment"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>terraform-gitlab-environment</b>
                        </a>
                        : Manages per-project environments in GitLab (e.g.,
                        review/stage/prod)
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/terraform-gitlab-environment"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/windows-cloud-image"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>windows-cloud-image</b>
                        </a>
                        : Packer templates to build Windows Server images with
                        Cloudbase-Init via VirtualBox/QEMU
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/windows-cloud-image"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                </ul>
            </Card>
            <Card
                date=""
                link="https://github.com/loopback4"
                title="Loopback4 Community Components"
                subtitle="Open Source"
                location=""
            >
                <ul>
                    <li>
                        <a
                            href="https://github.com/loopback4/loopback-component-crud"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>loopback-component-crud</b>
                        </a>
                        : Generates CRUD endpoints from model configs; supports
                        authentication, authorization, validation, nested
                        create/update
                        <Link
                            className="ml-2"
                            href="https://github.com/loopback4/loopback-component-crud"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/loopback4/loopback-component-filter"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>loopback-component-filter</b>
                        </a>
                        : Repository mixin to filter records based on
                        user/context rules
                        <Link
                            className="ml-2"
                            href="https://github.com/loopback4/loopback-component-filter"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/loopback4/loopback-component-history"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>loopback-component-history</b>
                        </a>
                        : Adds temporal history to models via
                        HistoryEntity/Repository, tracking create/update/delete
                        <Link
                            className="ml-2"
                            href="https://github.com/loopback4/loopback-component-history"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/loopback4/loopback-component-cascade"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>loopback-component-cascade</b>
                        </a>
                        : Repository mixin for cascading create/update/delete
                        across relations
                        <Link
                            className="ml-2"
                            href="https://github.com/loopback4/loopback-component-cascade"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/loopback4/loopback-component-authorization"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>loopback-component-authorization</b>
                        </a>
                        : HRBAC authorization for LoopBack 4 with decorators,
                        repositories, and mixins
                        <Link
                            className="ml-2"
                            href="https://github.com/loopback4/loopback-component-authorization"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                </ul>
            </Card>
            <Card
                date=""
                title="ReactAdmin Data Providers"
                subtitle="Open Source"
                location=""
            >
                <ul>
                    <li>
                        <a
                            href="https://github.com/loopback4/ra-data-lb4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>ra-data-lb4</b>
                        </a>
                        : React Admin data provider for LoopBack 4; supports
                        includes and custom HTTP client
                        <Link
                            className="ml-2"
                            href="https://github.com/loopback4/ra-data-lb4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/ra-data-mixer"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>ra-data-mixer</b>
                        </a>
                        : Mixes multiple data providers/resources into one React
                        Admin provider with per-resource filters
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/ra-data-mixer"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        <a
                            href="https://github.com/ckoliber/ra-data-processmaker3"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <b>ra-data-processmaker3</b>
                        </a>
                        : React Admin data provider for ProcessMaker 3 APIs;
                        supports custom HTTP client
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/ra-data-processmaker3"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                </ul>
            </Card>
            <Card
                date=""
                link="https://github.com/ckoliber/cham"
                title="Chapar Messenger (ChaM)"
                subtitle="Open Source"
                location=""
            >
                <ul>
                    <li>
                        Developed a custom messaging protocol over TCP/UDP using
                        Erlang
                    </li>
                    <li>
                        Implemented Hole Punching for P2P connections in
                        audio/video calls with Erlang
                    </li>
                    <li>
                        Created a resumable streaming protocol for file
                        transfers using C
                    </li>
                    <li>
                        Streamed audio/video frames using Android native APIs,
                        FFMPEG, and raw sockets
                    </li>
                    <li>
                        Built an Android messenger app with Java, C (JNI), and
                        Android Studio
                    </li>
                    <li>
                        Developed a desktop messenger app using Qt, C++, and QML
                    </li>
                </ul>
            </Card>
        </>
    );
}

function Course() {
    return (
        <>
            <Text id="course" as="h2" className="warning">
                Course Projects
            </Text>
            <Card
                date="Fall 2022"
                link="https://github.com/ckoliber/nlpexercises"
                title="Natural Language Processing"
                subtitle="Prof. Bagher Babaali"
                location=""
            >
                <ul>
                    <li>
                        Training N-Gram Language Model on Hamshahri v2 dataset
                        (Persian Newspaper) using NLTK
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/nlpexercises/blob/main/src/exercise1.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Implementation of Hidden-Markov-Model from scratch in
                        python (Baum Welch Algorithm, Viterbi Algorithm)
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/nlpexercises/blob/main/src/hmm/hmm.py"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Part-of-Speech Tagging using Hidden-Markov-Model
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/nlpexercises/blob/main/src/exercise3.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Applying TF-IDF and LSA for Text Classification on
                        Persica dataset
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/nlpexercises/blob/main/src/exercise4.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Text Classification on Persica dataset using ParsBERT
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/nlpexercises/blob/main/src/exercise5.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Part-of-Speech Tagging on Persian dataset using ParsBERT
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/nlpexercises/blob/main/src/exercise6.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                </ul>
            </Card>
            <Card
                date="Fall 2022"
                link="https://github.com/ckoliber/dipexercises"
                title="Digital Image Processing"
                subtitle="Prof. Hedieh Sajedi"
                location=""
            >
                <ul>
                    <li>
                        Applying Geometrical Operation, Histogram Equalization,
                        Filtering in Spacial and Frequency domain, and
                        Morphological Operation using OpenCV
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/dipexercises/blob/main/src/exercise1.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Blast Cell Image Classification into Normal and Abnormal
                        using a CNN Model
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/dipexercises/blob/main/src/exercise2.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        CIFAR10 Classification using a Nested-Hierarchical
                        Transformer (NesT)
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/dipexercises/blob/main/src/project.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                </ul>
            </Card>
            <Card
                date="Fall 2022"
                link="https://github.com/ckoliber/mlexercises"
                title="Machine Learning"
                subtitle="Prof. Bagher Babaali & Prof. Hedieh Sajedi"
                location=""
            >
                <ul>
                    <li>
                        Implementation of perceptron from scratch using Python
                        and NumPy and applying it on Polynomial Regression
                        problem
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise1.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Training perceptron for Money Classification into Real
                        and Fake classes
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise2.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Implementation of Linear-Discriminant-Analysis using
                        Python and NumPy and applying it to reducing dimension
                        and visualizing data
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise3.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Implementation of Principal-Component-Analysis using
                        Python and NumPy and applying it to Face Image dataset
                        compression and reconstruction
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise4.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Applying Logistic Regression for a binary classification
                        task on Income dataset
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise5.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Applying K-Means clustering method on dataset and
                        visualizing clusters
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise6.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Activity Recognition using Wearable Physiological Signal
                        Features using Decision Tree, Random Forest, XGBoost,
                        and SVM Classifiers
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise1_1.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Parkinson&apos;s Disease Detection using Speech Signal
                        Features using Decision Tree, Random Forest, XGBoost,
                        SVM, MLP, ELM, and Autoencoder
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/mlexercises/blob/master/src/exercise2_1.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Heart Disease Prediction from Health Indicators using
                        Decision Tree, Random Forest, XGBoost, SVM, MLP, ELM,
                        and Autoencoder
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/mlexercises/blob/master/src/project.ipynb"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                </ul>
            </Card>
            <Card
                date="Fall 2022"
                link="https://github.com/ckoliber/actexercises"
                title="Advanced Computation Theory"
                subtitle="Prof. Majid Alizadeh"
                location=""
            >
                <ul>
                    <li>
                        Implementation of Davis Language interpreter in python
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/actexercises/blob/master/projects/interpreter.py"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Implementation of Davis Language encoder and decoder for
                        Universal Programs
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/actexercises/blob/master/projects/encoder.py"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                </ul>
            </Card>
            <Card
                date="Fall 2020"
                title="Operation Systems"
                subtitle="Prof. Saeed Reza Kheradpisheh"
                location=""
            >
                <ul>
                    <li>
                        Implementation of Cross Platform Async Socket Server
                        (TCP, UDP) in C
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/Knet"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Implementation of Thread Pool and Process Pool design
                        patterns in C using pthread library
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/Kprocessor"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Implementation of Cross Platform IPC Tools (Semaphores,
                        Shared Memories, Message Queues) in C
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/Kipc"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                </ul>
            </Card>
            <Card
                date="Fall 2020"
                title="Compiler Design"
                subtitle="Prof. Somaye Arabi"
                location=""
            >
                <ul>
                    <li>
                        C Language JSON parser and packer library
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/Kson"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Mini C Language compiler using Lex and Yacc
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/minicc"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                </ul>
            </Card>
            <Card
                date="Fall 2020"
                title="Data Structures and Algorithms"
                subtitle="Prof. Somaye Arabi"
                location=""
            >
                <ul>
                    <li>
                        Postfix and Prefix parser using Java
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/XFixToYFix"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        TypeScript Memoization library (NPM package)
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/memoizor"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Huffman Compressor desktop application using C++, Qt,
                        QML
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/kuffman"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Implementation of Basic Data Structures (ArrayList,
                        LinkedList, Stack, Queue, Deque) in C
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/kstd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                </ul>
            </Card>
            <Card
                date="Fall 2020"
                title="Advanced Programming"
                subtitle="Prof. Keivan Borna"
                location=""
            >
                <ul>
                    <li>
                        Implementation of 2048 Game in Java
                        <Link
                            className="ml-2"
                            href=" https://github.com/ckoliber/2048 "
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Implementation of Maze Game in Java
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/Maze"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Implementation of Library Manager using Java, JavaFX
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/LibraryManager"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLink} />
                        </Link>
                    </li>
                    <li>
                        Implementation of Govara Assets Manager using C++, Qt,
                        QML
                        <Link
                            className="ml-2"
                            href="https://github.com/ckoliber/govara"
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

export default function Page() {
    return (
        <>
            <Hero image="/images/break_projects.jpg" height="70vh">
                <Text as="h1">Projects</Text>
            </Hero>
            <section className="flex flex-col items-center p-4 md:p-8">
                <div className="container max-w-screen-xl">
                    <Published />
                    <Frame as="hr" className="my-8" />
                    <Course />
                </div>
            </section>
        </>
    );
}
