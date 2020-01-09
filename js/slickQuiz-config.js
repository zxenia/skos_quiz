// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "SKOS Quiz",
        "main":    ""
    },
    "questions": [
        { // Question 1
            "q": "Select all triples with correct RDF syntax representing statement about Concept.\
            <p>Please, assume the following prefixes for all options:</p>\
            <p>@prefix skos: &lt;http://www.w3.org/2004/02/skos/core#&gt; .</p>\
            <p>@prefix ex: &lt;http://www.example.org/cats#&gt; .</p>\
            <p>@prefix wikidata: &lt;http://www.wikidata.org/entity/&gt; .</p>\n",
            "a": [
                {"option": "1. ex:europeanWildcat a skos Concept; skos prefLabel “European wildcat”@en.", "correct": false},
                {"option": "2. ex:europeanWildcat rdf:type skos:Concept; skos:preflabel “European wildcat”@en.", "correct": false},
                {"option": "3. ex:europeanWildcat a skos:Concept; skos:prefLabel “European wildcat”@en.", "correct": true},
                {"option": "4. ex:europeanWildcat rdf:type skos:Concept, skos:preflabel “European wildcat”@en.", "correct": false} // no comma here
            ],
            "select_all": true,
            "force_checkbox": true,
            "correct": "<p><span>Correct.</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>\
            <p>Correct answer is 3.</p>" // no comma here
        },
        { // Question 2
            "q": "Select all incorrect SKOS records.\
            <p>Please, assume the following prefixes for all options:</p>\
            <p>@prefix skos: &lt;http://www.w3.org/2004/02/skos/core#&gt; .</p>\
            <p>@prefix ex: &lt;http://www.example.org/cats#&gt; .</p>\
            <p>@prefix wikidata: &lt;http://www.wikidata.org/entity/&gt; .</p>",
            "a": [
                {"option": "1. ex:eurasianLynx a skos:Concept; skos:prefLabel “Eurasian lynx”@en; skos:prefLabel “Lynx”@en.", "correct": true},
                {"option": "2. ex:eurasianLynx a skos:Concept; skos:prefLabel “Eurasian lynx”@en; skos:prefLabel “Eurasischer Luchs”@de.", "correct": false},
                {"option": "3. ex:eurasianLynx a skos:Concept; skos:prefLabel “Eurasian lynx”@en; skos:altLabel “Lynx”@en.", "correct": false},
                {"option": "4. ex:eurasianLynx a skos:Concept; skos:prefLabel “Eurasian lynx”@en; skos:prefLabel “Eurasischer Luchs”@en.", "correct": true} // no comma here
            ],
            "select_all": true,
            "force_checkbox": true,
            "correct": "<p><span>Correct.</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>\
            <p>Correct answers are 1 and 4.</p>" // no comma here
        },
        { // Question 3
            "q": "Select all incorrect SKOS records.\
            <p>Please, assume the following prefixes for all options:</p>\
            <p>@prefix skos: &lt;http://www.w3.org/2004/02/skos/core#&gt; .</p>\
            <p>@prefix ex: &lt;http://www.example.org/cats#&gt; .</p>\
            <p>@prefix wikidata: &lt;http://www.wikidata.org/entity/&gt; .</p>",
            "a": [
                {"option": "1. ex:europeanWildcat a skos:Concept; skos:exactMatch ex:eurasianLynx", "correct": true},
                {"option": "2. ex:europeanWildcat a skos:Concept; skos:exactMatch wikidata:Q148833.", "correct": false},
                {"option": "3. ex:europeanWildcat a skos:Concept; skos:broader ex:wildcat; skos:broadMatch ex:wildcat.", "correct": true},
                {"option": "4. ex:europeanWildcat a skos:Concept; skos:broader ex:wildcat; skos:broadMatch wikidata:Q43576.", "correct": false} // no comma here
            ],
            "select_all": true,
            "force_checkbox": true,
            "correct": "<p><span>Correct.</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>\
            <p>Correct answers are 1 and 3.</p>" // no comma here
        },
        { // Question 4
            "q": "Select all incorrect statements.",
            "a": [
                {"option": "1. Concept can be a top Concept of Concept Scheme and have a broader Concept in this Concept Scheme.", "correct": true},
                {"option": "2. Concept can have several preferred labels in one language.", "correct": true},
                {"option": "3. Concept can be broader and narrower of another Concept at the same time.", "correct": true},
                {"option": "4. Concept can have several alternative labels in one language.", "correct": false} // no comma here
            ],
            "select_all": true,
            "force_checkbox": true,
            "correct": "<p><span>Correct.</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>\
            <p>Correct answers are 1, 2 and 3.</p>" // no comma here
        },
        { // Question 5
            "q": "Select all correct statements.",
            "a": [
                {"option": "1. Concept can’t have more than one preferred label in one language.", "correct": true},
                {"option": "2. It is recommended to create a new Concept for each synonym of a term.", "correct": false},
                {"option": "3. Concept can have a broader matching concept in another Concept Scheme and can be linked to it.", "correct": true},
                {"option": "4. Concept can have many matching Concepts in external Concept Schemas.", "correct": true} // no comma here
            ],
            "select_all": true,
            "force_checkbox": true,
            "correct": "<p><span>Correct.</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>\
            <p>Correct answers are 1, 3 and 4.</p>" // no comma here
        } // no comma here
    ]
};
