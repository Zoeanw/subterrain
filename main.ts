function subterrain () {
    game.showLongText("Are there oceans inside Earth?", DialogLayout.Bottom)
    story.showPlayerChoices("Yes", "No")
    if (story.checkLastAnswer("Yes")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function subterrain2 () {
    game.showLongText("How many layers does earth have?", DialogLayout.Bottom)
    story.showPlayerChoices("4", "3")
    if (story.checkLastAnswer("4")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct")
        info.changeScoreBy(-1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
function subterrain3 () {
    game.showLongText("What does Hawaii move closer to each year? .", DialogLayout.Bottom)
    story.showPlayerChoices("God", "Alaska")
    if (story.checkLastAnswer("Alaska")) {
        music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
        game.splash("Correct")
        info.changeScoreBy(1)
    } else {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        game.splash("Wrong! Try again.")
        info.changeScoreBy(-1)
    }
}
