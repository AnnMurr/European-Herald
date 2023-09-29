import { IconBtn } from "../../../iconBtn/iconBtn";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { Inner } from "./styledBookmarksBtn";
import { useAppDispatch, useAppSelector } from "../../../../../redux/store/store";
import { changeUserData } from "../../../../../redux/reducers/usersReducer/usersReducer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookmarksBtnProps } from "../../types";

export const BookmarksBtn: React.FC<BookmarksBtnProps> = ({ dataCard }) => {
    const dispatch = useAppDispatch()
    const dataUserFromRedux = useAppSelector((state) => state.user.userData)
    const { articlename } = useParams()
    const [addedToBookmarks, setAddedToBookmarks] = useState<boolean>(false)

    const addArticleToBookmarks = () => {
        if (dataUserFromRedux) {
            if (addedToBookmarks) {
                dispatch(changeUserData({
                    ...dataUserFromRedux,
                    bookmarks: dataUserFromRedux?.bookmarks.filter(bookmark => bookmark.uri !== articlename)
                }))
            } else {
                dispatch(changeUserData({
                    ...dataUserFromRedux,
                    bookmarks: [...(dataUserFromRedux?.bookmarks || []), dataCard]
                }))
            }
        }
    }

    useEffect(() => {
        dataUserFromRedux?.bookmarks &&
            dataUserFromRedux.bookmarks.some((bookmark) => bookmark.uri === articlename) ?
            setAddedToBookmarks(true) :
            setAddedToBookmarks(false)
    }, [dataUserFromRedux])

    return (
        <Inner>
            <IconBtn onClickFunc={addArticleToBookmarks} icon={addedToBookmarks ? faBookmarkSolid : faBookmark} size={"lg"} />
        </Inner>
    )
}