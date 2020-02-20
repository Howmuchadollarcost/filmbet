const Titleformatter = (title) => {
    return title.length > 15 ?  title.slice(0,15) + "...": title;
}

export { Titleformatter }