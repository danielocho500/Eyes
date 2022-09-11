let states = {
    neutral: { //Post your other emotions as a comment
        face: {
            rotationX:0,
            rotationY:0,
            rotationZ:0
        },
        left: {
            lower:{
                rotation:0,
                position:0
            },
            upper:{
                rotation:0,
                position:0
            }
        },
        right: {
            lower:{
                rotation:0,
                position:0
            },
            upper:{
                rotation:0,
                position:0
            }
        }
    },
    happy: {
        face: {
            rotationX:0,
            rotationY:0,
            rotationZ:0
        },
        left: {
            lower:{
                rotation:20,
                position:40
            },
            upper:{
                rotation:0,
                position:0
            }
        },
        right: {
            lower:{
                rotation:-20,
                position:40
            },
            upper:{
                rotation:0,
                position:0
            }
        }
    },
    sad: {
        face: {
            rotationX:0,
            rotationY:0,
            rotationZ:0
        },
        left: {
            lower:{
                rotation:0,
                position:0
            },
            upper:{
                rotation:-20,
                position:40
            }
        },
        right: {
            lower:{
                rotation:0,
                position:0
            },
            upper:{
                rotation:20,
                position:40
            }
        }
    },
    close: {
        face: {
            rotationX:-20,
            rotationY:0,
            rotationZ:0
        },
        left: {
            lower:{
                rotation:0,
                position:45
            },
            upper:{
                rotation:0,
                position:45
            }
        },
        right: {
            lower:{
                rotation:0,
                position:45
            },
            upper:{
                rotation:0,
                position:45
            }
        }
    },
    angry: {
        face: {
            rotationX:-10,
            rotationY:0,
            rotationZ:0
        },
        left: {
            lower:{
                rotation:0,
                position:0
            },
            upper:{
                rotation:20,
                position:40
            }
        },
        right: {
            lower:{
                rotation:0,
                position:0
            },
            upper:{
                rotation:-20,
                position:40
            }
        }
    },
    confused: {
        face: {
            rotationX:0,
            rotationY:0,
            rotationZ:0
        },
        left: {
            lower:{
                rotation:0,
                position:0
            },
            upper:{
                rotation:0,
                position:40
            }
        },
        right: {
            lower:{
                rotation:0,
                position:0
            },
            upper:{
                rotation:0,
                position:0
            }
        }
    },
    suspicious: {
        face: {
            rotationX:0,
            rotationY:0,
            rotationZ:0
        },
        left: {
            lower:{
                rotation:-4,
                position:20
            },
            upper:{
                rotation:4,
                position:20
            }
        },
        right: {
            lower:{
                rotation:4,
                position:20
            },
            upper:{
                rotation:-4,
                position:20
            }
        }
    },
    pain: {
        face: {
            rotationX:0,
            rotationY:0,
            rotationZ:0
        },
        left: {
            lower:{
                rotation:10,
                position:20
            },
            upper:{
                rotation:-10,
                position:20
            }
        },
        right: {
            lower:{
                rotation:-10,
                position:20
            },
            upper:{
                rotation:10,
                position:20
            }
        }
    },
    unamused: {
        face: {
            rotationX:0,
            rotationY:0,
            rotationZ:0
        },
        left: {
            lower:{
                rotation:0,
                position:0
            },
            upper:{
                rotation:0,
                position:40
            }
        },
        right: {
            lower:{
                rotation:0,
                position:0
            },
            upper:{
                rotation:0,
                position:40
            }
        }
    },
    unsure: {
        face: {
            rotationX:0,
            rotationY:0,
            rotationZ:7
        },
        left: {
            lower:{
                rotation:10,
                position:20
            },
            upper:{
                rotation:-10,
                position:20
            }
        },
        right: {
            lower:{
                rotation:0,
                position:0
            },
            upper:{
                rotation:0,
                position:0
            }
        }
    }
}

module.exports = {
    states
}