#!/bin/bash
# Usage: ./protos-sync.sh protos

set -ex

TF_VERSION=2.6.0
TMP_FOLDER=tmp

function getTensorflow() {
    mkdir -p $TMP_FOLDER/tensorflow
    pushd $TMP_FOLDER/tensorflow

    curl -SL -o tf.zip https://github.com/tensorflow/tensorflow/archive/v$TF_VERSION.zip
    unzip -q tf.zip

    mkdir -p $1/tensorflow/core/framework/ \
        $1/tensorflow/core/protobuf/ \

    rsync -r --include="*.proto" --exclude="*" tensorflow-$TF_VERSION/tensorflow/core/framework/ $1/tensorflow/core/framework/
    rsync -r --include="*.proto" --exclude="*" tensorflow-$TF_VERSION/tensorflow/core/protobuf/ $1/tensorflow/core/protobuf/

    popd
}

function pull_protos() {
    rm -rf $TMP_FOLDER
    mkdir -p $TMP_FOLDER

    target_path=`realpath $1`

    rm -rf $target_path
    mkdir -p $target_path/

    getTensorflow $target_path/

    find $target_path -type d -empty -delete
}

pull_protos $1
